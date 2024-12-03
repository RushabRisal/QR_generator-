import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import { Error } from './Error'
import * as Yup from 'yup'
export const Login = () => {
    const [error, setError] = useState([])
    const [formdata, setFormData] = useState({
        email:"",
        password:""
    })
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleLogin= async(e)=>{
        setError([])
        try {
            const schema= Yup.object().shape({
                email:Yup.string().email("Invalid Email").required("Email is required"),
                password:Yup.string().min(6,"Atleast 6 character is required").required("Password is required")
            });
            await schema.validate(formdata,{abortEarly:false})
        } catch (e) {
            const newError={};
            e?.inner?.forEach((err)=>{
                newError[err.path]=err.message;
            });
            setError(newError);
        }
    }
  return (
    <Card>
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>to your account if you have one</CardDescription>
            <Error message={"Some Error"}/>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className='space-y-2'>
                <Input name="email" type="email" 
                onChange={handleInputChange}
                placeholder="Enter Email"/>
               {error.email && <Error message={error.email}/>}
            </div>
            <div className='space-y-2'>
                <Input name="password" type="password"
                onChange={handleInputChange}
                placeholder="Enter Password"/>
               {error.password && <Error message={error.password}/> } 
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={handleLogin} variant="destructive">
                {false? <BeatLoader size={10} color='white'/>: "Login"}
            </Button>
        </CardFooter>
    </Card>

  )
}

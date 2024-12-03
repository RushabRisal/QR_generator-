import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const [longurl,setLongUrl]=useState()
  const navigate=useNavigate()
  const handleShorten=(e)=>{
      e.preventDefault()
      if(longurl)navigate(`/auth?createNew=${longurl}`)
  }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-bold '>
          The only URL shortner<br/> you&rsquo;ll ever need
        </h1>
        <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
          <Input type="url" 
          value={longurl}
          placeholder="Enter your Long Url"
          onChange={(e)=>setLongUrl(e.target.value)}
          className="h-full flex-1 p-4"
          />
          <Button className="h-full" type="submit" variant="destructive">Shortner!</Button>
        </form>
        <img src="MainPhoto.jpg" alt="main img" className='my-11 w-full md:px-11' />
        <Accordion type="multiple" collapsible className='w-full md:px-11'>
          <AccordionItem value="item-1">
            <AccordionTrigger>What do you came up with this project?</AccordionTrigger>
            <AccordionContent>
              Just i made it to learn more features of react.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Use of this website?</AccordionTrigger>
            <AccordionContent>
              To generate the QR code of the url and keep track of who visited.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Scope of this website?</AccordionTrigger>
            <AccordionContent>
              It is for personal use
            </AccordionContent>
          </AccordionItem>
        </Accordion>

    </div>
  )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu,DropdownMenuSeparator,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuItem,DropdownMenuContent } from './ui/dropdown-menu'
import { Avatar,AvatarImage, AvatarFallback } from './ui/avatar'
import { LinkIcon, LogOut } from 'lucide-react'
export const Header = () => {
    //programmatical navigation
    const navigate=useNavigate()
    const user= false
  return (
    <nav className='py-4 flex justify-between items-center'>
    <Link to='/'>
        <img src="/RLogo.png" className='h-16 ' alt=" logo" />
    </Link>
    <div>
        {!user?
            <Button onClick={()=>navigate("/auth")}>Login</Button>:
            (
                <DropdownMenu>
                    <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>RR</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Rushab Risal</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LinkIcon className='mr-2 h-4 w-4'/>
                            My Links</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                            <LogOut className='mr-2 h-4 w-4'/>
                            <span>
                                Logout
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )        
        }
    </div>
</nav>
  )
}


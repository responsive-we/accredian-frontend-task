import React from 'react'
import Logo from '../assets/logo.png'
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className="flex items-center">
        <div className='mr-4'>
        <img src={Logo} className='w-40' alt="logo" />
        </div>
        <div>
        <Button>Get Started</Button>
        </div>
        </div>
        <div className="">
            <ul className='flex gap-5 items-center cursor-pointer'>
                <li className=' hover:underline'>Refer and Eearn </li>
                <li className=' hover:underline'>Resources </li>
                <li className=' hover:underline'>About Us </li>
                <li><Button variant={"outline"}>Login</Button> </li>
                <li><Button>Try for free</Button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
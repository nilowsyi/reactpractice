import {AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {

    const [nav, Setnav] = useState(false)

    const Handlenav = () => {
        Setnav(!nav)
    }

    return <>

    <nav className="text-white flex max-w-[1280px] mx-auto p-5 justify-between">
        <h1 className="w-full">FreeshMan</h1>
        <ul className="gap-6 hidden md:flex">
            <li><a href="">Inicio</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Knowing</a></li>
            <li><a href="">Liable</a></li>
        </ul>
        <div onClick={Handlenav} className="block md:hidden">
            { nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
        {/* probably here we're gonna need to add a bg to hide the content of the website */}
        <div className={nav ? 'fixed top-0 left-0 w-[50%]  uppercase h-full ease-in-out duration-500 bg-black' : 'hidden'}>

            <ul className="pt-20">
            <li className="p-5 border-b border-gray-600"><a href="">Inicio</a></li>
            <li className="p-5 border-b border-gray-600"><a href="">About</a></li>
            <li className="p-5 border-b border-gray-600"><a href="">Services</a></li>
            <li className="p-5 border-b border-gray-600"><a href="">Knowing</a></li>
            <li className="p-5"><a href="">Liable</a></li>
            </ul>
            </div>
    </nav>
    
    
    
    </>
    
}
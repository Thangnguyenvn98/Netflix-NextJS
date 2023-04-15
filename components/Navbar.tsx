/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import AccountMenu from "./AccountMenu";

const TOP_OFFSET= 66

export default function Navbar () {
    const[showMobileMenu,setShowMobileMenu] = useState(false)
    const[showAccountMenu,setShowAccountMenu] = useState(false)
    const [showBackground,setShowBackground] = useState(false)



    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true)
            }else {
                setShowBackground(false)
            }
        }
        window.addEventListener("scroll", handleScoll)
        return () => {
            window.removeEventListener("scroll", handleScoll)
        }

    },[])

    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current)
    },[])
    
    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current)
    },[])


    return(
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${showBackground ? 'bg-zinc-900/90' : ''}`}>
        <img src="/images/new-logo.jpg" alt="logo" className="h-4 lg:h-7" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItem label={'Home'}/>
            <NavbarItem label={'Series'}/>
            <NavbarItem label={'Films'}/>
            <NavbarItem label={'New & Popular'}/>
            <NavbarItem label={'My List'}/>
            <NavbarItem label={'Browse by languages'}/>
        </div>
        <div className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative" onClick={toggleMobileMenu}>
            <p className="text-white text-sm">Browse</p>
         <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180':'rotate-0'}`}/>
       
            <MobileMenu visible={showMobileMenu} />  
            {/* In mobile menu position is set to absolute so that it goes under for a drop down menu */}
        </div>
        <div className="flex ml-auto gap-7 items-center">
            <div className="text-gray-200 cursor-pointer hover:text-gray-300 transition">
                <BsSearch/>
            </div>
            <div className="text-gray-200 cursor-pointer hover:text-gray-300 transition">
                <BsBell/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer relative " onClick={toggleAccountMenu}>
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                    <img src="/images/default-blue.png" alt="Logo" />
                </div>
                <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180':'rotate-0'}`}/>
                <AccountMenu visible={showAccountMenu}/>
                
            </div>
        </div>
        </div>
            
        </nav>
    )
}
import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import {BsChevronDown, BsChevronUp, BsSearch, BsBell} from 'react-icons/bs'
import AccountMenu from "./AccountMenu";

export default function Navbar () {
    const[showMobileMenu,setShowMobileMenu] = useState(false)

    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current)
    },[])

    return(
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex items-center transition duration-500 bg-zinc-900/90">
        <img src="/images/logo.png" alt="logo" className="h-4 lg:h-7" />
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
            { !showMobileMenu ? <BsChevronUp className="text-white transition"/>: <BsChevronDown className="text-white transition"/>}
       
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
            <div className="flex items-center gap-2 cursor-pointer relative">
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                    <img src="/images/default-blue.png" alt="Logo" />
                </div>
                { !showMobileMenu ? <BsChevronUp className="text-white transition"/>: <BsChevronDown className="text-white transition"/>}
                <AccountMenu/>
                
            </div>
        </div>
        </div>
            
        </nav>
    )
}
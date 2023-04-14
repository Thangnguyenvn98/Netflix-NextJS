import useCurrentUser from "@/hooks/useCurrentUser"
import { signOut } from "next-auth/react"
import React from "react"


interface AccountMenuProps{
    visible?:boolean
}

export default function AccountMenu({visible}:AccountMenuProps){

    const {data:user} = useCurrentUser()

    if(!visible) return null
    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col flex border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex gap-3 items-center w-full">
                     <img src="/images/default-blue.png" alt="logo" className="w-8 rounded-md" />
                     <p className="text-white text-sm group-hover/item:underline">
                        {user?.name}
                     </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div className="px-3 text-center text-white text-sm hover:underline" onClick={()=>signOut()}>
                    Sign Out of Netflix
                </div>
            </div>
        </div>
    )
}
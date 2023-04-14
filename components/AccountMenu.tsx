import { signOut } from "next-auth/react"
import React from "react"


interface AccountMenuProps{
    visible?:boolean
}

export default function AccountMenu({visible}:AccountMenuProps){

    if(!visible) return null
    return (
        <div className="bg-black w-56 absolutte top-14 right-0 py-5 flex-col flex border-2">Asd</div>
    )
}
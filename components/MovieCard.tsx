/* eslint-disable @next/next/no-img-element */
import { BsFillPlayFill } from "react-icons/bs"
import React from "react"


interface MovieCardProps {
    data: Record<string,any>
}

export default function MovieCard({data}:MovieCardProps) {
    return (
        <div className="group bg-zinc-900 col-span-1 relative h-[12vw]">
            <img src={data.thumbnailUrl} alt={data.title || "movie"} className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 delay-300 w-full h-[12vw] sm:group-hover:opacity-0"/>
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img src={data.thumbnailUrl} alt="Thumbnail" className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex items-center gap-3">
                        <div onClick={() => {}} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white flex justify-center items-center transition hover:bg-neutral-300">
                            <BsFillPlayFill size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
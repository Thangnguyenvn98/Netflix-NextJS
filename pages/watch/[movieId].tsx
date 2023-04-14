import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function Watch(){
    const router = useRouter()
    const {movieId} = router.query
    const {data} = useMovie(movieId as string) //encoded as data since this is what returning from the hook of SWR


    return (
       <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex items-center gap-9 bg-black/70">
            <AiOutlineArrowLeft className="text-white cursor-pointer" size={40}  onClick={()=>router.push('/')}/>
            <p className="text-1xl text-white md:text-3xl font-bold">
                <span className="font-light">Watching:</span>
                {data?.title}
            </p>
        </nav>
        <video src={data?.videoUrl} className="h-full w-full" autoPlay controls></video>

       </div>
    )
}
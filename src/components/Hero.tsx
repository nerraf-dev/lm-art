import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({subsets: ["latin"]});

export default function Hero({heading, message, buttonText, url="#"}:{heading:string, message:string, buttonText?:string, url?:string}) {
    return (
        <div className="flex items-center justify-center h-[40vh] mb-12 bg-fixed bg-center bg-cover hero">
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#fffdf1]/80 z-[2]"/> Overlay */}
            <div className="p-5 text-zinc-700 z-[2] mx-auto text-center">
                <div style={{ minWidth: '300px', minHeight: '106px' }}>
                    <Image src="/media/images/logo-centre.jpeg" alt="LM-Art" width={800} height={106} objectFit="cover" />
                </div>
                {/* <h2 className='text-2xl xs:text-3xl md:text-8xl font-bold p-4 font-mono font'>{heading}</h2> */}
                <p className="py-5 text-l ">{message}</p>
                {buttonText && <Link href={url}><button className="px-8 py-2 border">{buttonText}</button></Link>}
            </div>
        </div>
    );
}

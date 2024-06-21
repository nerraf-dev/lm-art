import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";


export default function Hero({heading, message, buttonText, url="#"}:{heading:string, message:string, buttonText?:string, url?:string}) {
    return (
        <div className="flex flex-col items-center justify-center pt-24 sm:pt-6 mb-12 ">

                <div >
                    <Image src="/media/images/logo-16-9.png" alt="L Meriel Art" width='690' height='388' style={{ objectFit: 'cover' }} />
                </div>
                <div className="header-image-container"> </div>
                <h1>{heading}</h1>

            <div>
                <p className="py-5 text-xs sm:text-sm xl:text-lg">{message}</p>
            </div>
        </div>
    );
}

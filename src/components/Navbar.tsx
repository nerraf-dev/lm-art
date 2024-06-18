"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { PiButterflyDuotone, PiCircuitryDuotone } from "react-icons/pi";
import NavigationLinks from "@/components/NavigationLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`fixed w-full ${isOpen ? "h-12" : "h-12"} bg-[#fffdf1] shadow-l z-[100] p-4`}>
            <nav className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
                <Link href="/">
                    <Image src="/media/images/menu_logo_40px.png" alt="logo" width={100} height={48} />
                </Link>
                <NavigationLinks className="hidden md:flex" />
                <div className="md:hidden" onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-12 left-0 w-full h-full bg-gray-200 bg-opacity-90 flex flex-col items-center">
                    <div className="flex justify-end w-full p-4">
                    </div>
                    <NavigationLinks className="flex flex-col items-center space-y-4" onClick={handleNav} />
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/lewis-mcgregor-1b5b0b1b7/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
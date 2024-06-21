"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
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
                    <Image src="/media/images/menu_logo_300px.png" alt="logo" width={100} height={48} />
                </Link>
                <NavigationLinks className="hidden md:flex" isOpen={isOpen} />
                <div className="md:hidden" onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-12 left-0 w-full h-full bg-gray-200 bg-opacity-90 flex flex-col items-center">
                    <div className="flex justify-end w-full p-4">
                    </div>
                    <NavigationLinks className="flex flex-col items-center space-y-4" isOpen={isOpen} onClick={handleNav} />
                </div>
            )}
        </div>
    );
};
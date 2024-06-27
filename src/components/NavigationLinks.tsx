import React from "react";
import NavLink from "@/components/NavLink";
import { FaInstagram } from "react-icons/fa6";

export default function NavigationLinks({className, onClick, isOpen }: { className: string; onClick?: () => void, isOpen: boolean }) {
    return (
        <ul className={`${className} space-x-4 pr-2`}>
            {isOpen && <NavLink href="/" onClick={onClick}>Home</NavLink>}
            <NavLink href="/about" onClick={onClick}>About</NavLink>
            <NavLink href="/commissions" onClick={onClick}>Commissions</NavLink>
            <NavLink href="https://www.instagram.com/lmeriel.art/" onClick={onClick}><FaInstagram size={20}/></NavLink>
            {/* <NavLink href="/contact" onClick={onClick}>Contact</NavLink> */}
        </ul>
    );
}
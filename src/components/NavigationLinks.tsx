import React from "react";
import Link from "next/link";

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <li className="ml-6 text-sm uppercase hover:border-b">
            <Link href={href} onClick={onClick}>{children}</Link>
        </li>
    );
}

export default function NavigationLinks({className, onClick }: { className: string; onClick?: () => void }) {
    return (
        <ul className={`${className} space-x-4`}>
            <NavLink href="/about" onClick={onClick}>About</NavLink>
            <NavLink href="/contact" onClick={onClick}>Contact</NavLink>
        </ul>
    );
}
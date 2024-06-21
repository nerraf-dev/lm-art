import React from "react";
import Link from "next/link";

export default function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <li className="ml-6 text-sm uppercase hover:border-b">
            <Link href={href} onClick={onClick}>{children}</Link>
        </li>
    );
}
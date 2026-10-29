"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

type NavItemProps = {
    href: string;
    label: string;
    badge?: number;
}

export default function NavItem({href, label, badge}: NavItemProps) {
    const pathname = usePathname()
    const isActive = pathname === href


    return (
        <Link href={href}
              className={`flex items-center gap-4 text-xl p-2 border-3 focus-visible:outline-3 focus-visible:outline-accent-pale focus-visible:outline-offset-2 ${isActive ? "text-black bg-accent border-ember hover:bg-accent-light" : "text-soft border-transparent hover:bg-ghost hover:border-ghost-line hover:text-text"}`}>
            {label}
            {!!badge && <span
                className="bg-accent outline outline-outline -outline-offset-2 text-panel-dark px-2 ml-auto">{badge}</span>}
        </Link>
    )
}
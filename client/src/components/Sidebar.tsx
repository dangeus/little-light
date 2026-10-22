import Link from "next/link";
import NavItem from "@/components/NavItem";

export default function Sidebar() {
    const navItems = [
        {href: "/profile", label: "Profile"},
        {href: "/messages", label: "Messages", badge: 3},
        {href: "/music", label: "Music"},
        {href: "/campfires", label: "Campfires"},
        {href: "/friends", label: "Friends"},
        {href: "/settings", label: "Settings"},
    ]

    return (
        <aside className="w-60 bg-panel border-3 border-line flex flex-col gap-8 p-6">
            <div>
                <Link href="/" className="text-3xl">Little Light</Link>
                <p className="font-small text-muted text-sm">music by the fire</p>
            </div>
            <div className="flex flex-col gap-4">
                {navItems.map((item) => <NavItem key={item.href} href={item.href} label={item.label} badge={item.badge}/>)}
            </div>
        </aside>
    )
}
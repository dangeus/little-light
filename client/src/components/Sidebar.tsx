import Link from "next/link";
import NavItem from "@/components/NavItem";
import {
    User as ProfileIcon,
    Comment as MessageIcon,
    Music as MusicIcon,
    Fire as CampfireIcon,
    Users as FriendsIcon,
    SettingsCog as SettingsIcon
} from 'pixelarticons/react'
import {type NavItemProps} from './NavItem'

export default function Sidebar() {
    const navItems: NavItemProps[] = [
        {href: "/profile", label: "Profile", icon: <ProfileIcon/>},
        {href: "/messages", label: "Messages", badge: 3, icon: <MessageIcon/>},
        {href: "/music", label: "Music", icon: <MusicIcon/>},
        {href: "/campfires", label: "Campfires", icon: <CampfireIcon/>},
        {href: "/friends", label: "Friends", icon: <FriendsIcon/>},
        {href: "/settings", label: "Settings", icon: <SettingsIcon/>},
    ]

    return (
        <aside className="size-fit bg-panel border-3 border-line flex flex-col gap-8 p-6">
            <div>
                <Link href="/" className="text-3xl">Little Light</Link>
                <p className="font-small text-muted text-sm">music by the fire</p>
            </div>
            <div className="flex flex-col gap-4">
                {navItems.map((item) => <NavItem key={item.href} href={item.href} icon={item.icon} label={item.label}
                                                 badge={item.badge}/>)}
            </div>
        </aside>
    )
}
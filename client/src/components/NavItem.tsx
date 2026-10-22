import Link from "next/link";

type NavItemProps = {
    href: string;
    label: string;
    badge?: number;
}

export default function NavItem({href, label, badge}: NavItemProps) {
    return (
        <Link href={href}
              className="flex items-center gap-4 text-soft text-xl p-2 border-3 border-transparent hover:bg-ghost hover:border-ghost-line hover:text-text focus-visible:outline-3 focus-visible:outline-accent-pale focus-visible:outline-offset-2">
            {label}
            {!!badge && <span
                className="bg-accent outline outline-outline -outline-offset-2 text-panel-dark px-2 ml-auto">{badge}</span>}
        </Link>
    )
}
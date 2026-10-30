import {ReactNode} from "react";

type AccentButtonProps = {
    children: string | ReactNode;
    className?: string;
}

export default function AccentButton({children, className}: AccentButtonProps) {
    return (
        <button className={`bg-accent hover:bg-accent-light text-black border-3 px-3 ${className}`}>
            {children}
        </button>
    )
}
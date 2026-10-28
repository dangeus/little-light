type HeaderStatProps = {
    value: number;
    name: string;
    borderClass: string;
}

export default function HeaderStat({value, name, borderClass}: HeaderStatProps) {
    return (
        <li className={`border-line bg-panel-dark p-2 flex flex-col items-center ${borderClass}`}>
            <span className="font-bold text-2xl">{value}</span>
            <span className="text-muted font-small text-xs">{name}</span>
        </li>
    )
}
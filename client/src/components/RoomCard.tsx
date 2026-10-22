import FireIcon from "@/components/icons/FireIcon";

export type Room = {
    id: number;
    name: string;
    genre: string;
    count: number;
}

type RoomCardProps = {
    room: Room;
}

export default function RoomCard({room}: RoomCardProps) {
    return (
        <div className="border-3 border-line bg-panel-dark px-3 py-2 flex items-center gap-3 hover:border-accent">
            <div className="size-10 bg-ember flex items-center justify-center shrink-0">
                <FireIcon/>
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate">{room.name}</p>
                <p className="text-sm text-muted">{room.genre}</p>
                <p className="text-sm text-muted">{room.count} by the fire</p>
            </div>
            <span className="font-small text-sm text-accent-pale">JOIN</span>
        </div>
    )
}
import RoomCard, {Room} from "@/components/RoomCard";

export default function CampfiresList() {
    const rooms: Room[] = [
        {
            id: 1,
            name: "Lo-fi by the river",
            genre: "Lo-fi",
            count: 5,
        },
        {
            id: 2,
            name: "Midnight post-rock",
            genre: "Post-rock",
            count: 3,
        },
        {
            id: 3,
            name: "Rainy piano",
            genre: "Ambient",
            count: 8,
        },
        {
            id: 4,
            name: "Old forest songs and quiet guitars for a slow evening",
            genre: "Folk",
            count: 2,
        },
    ];

    return (
        <div className="bg-panel border-3 border-line p-4 flex flex-col gap-3 h-fit">
            <div className="flex justify-between">
                <p className="text-2xl font-bold">Campfires</p>
                <button className="text-accent-light underline">All rooms</button>
            </div>
            {rooms.slice(0, 3).map((room) => <RoomCard key={room.id} room={room}/>)}
        </div>
    )
}
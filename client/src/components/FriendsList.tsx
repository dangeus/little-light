import FriendCard, {Friend} from "@/components/FriendCard";

export default function FriendsList() {
    const friends: Friend[] = [
        {
            name: "Maxim",
            status: "dsadsa",
            avatarColor: "#999999",
            isOnline: true
        },
        {
            name: "Anna",
            status: "Coding today... Do not disturb 🚀",
            avatarColor: "#FF5733",
            isOnline: false
        },
        {
            name: "Artem",
            status: "Coffee, coffee and more coffee ☕",
            avatarColor: "#33FF57",
            isOnline: true
        },
        {
            name: "Elena",
            status: "Chilling by the beach 🌊",
            avatarColor: "#3357FF",
            isOnline: true
        },
        {
            name: "Dmitry",
            status: "In a meeting",
            avatarColor: "#F3FF33",
            isOnline: false
        }
    ];

    return (
        <div className="bg-panel border-3 border-line p-4 flex flex-col gap-2 h-fit w-full">
            <div className="flex justify-between">
                <p className="text-2xl">Friends</p>
                <button className="text-accent-light underline">View all</button>
            </div>
            <div>
                {friends.map((friend) => <FriendCard key={friend.name} friend={friend}/>)}
            </div>
        </div>
    )
}
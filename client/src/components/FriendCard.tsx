export type Friend = {
    name: string;
    status: string;
    avatarColor: `#${string}`;
    isOnline: boolean;
}

type FriendCardProps = {
    friend: Friend;
}

export default function FriendCard({friend}: FriendCardProps) {
    return (
        <div className="flex p-3 gap-3 items-center border-3 border-transparent hover:bg-ghost hover:border-ghost-line">
            <div
                className="size-10 outline-3 outline-outline relative"
                style={{background: friend.avatarColor}}>
                {friend.isOnline &&
                    <div className="bg-green-500 size-3 outline-3 outline-panel absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3"/>}
            </div>
            <div className="w-30">
                <p>{friend.name}</p>
                <p className="text-muted  truncate">{friend.status}</p>
            </div>
        </div>
    )
}
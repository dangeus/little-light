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
        <div className="flex p-2 gap-1 items-center w-50">
            <div
                className="size-10 border-3 border-panel-dark relative"
                style={{background: friend.avatarColor}}>
                {friend.isOnline &&
                    <div
                        className="bg-green-500 size-3 border-3 border-panel-dark absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3"/>}</div>
            <div className="w-30">
                <p>{friend.name}</p>
                <p className="text-muted  truncate">{friend.status}</p>
            </div>
        </div>
    )
}
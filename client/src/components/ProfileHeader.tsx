import AvatarIcon from "@/components/icons/AvatarIcon";

export default function ProfileHeader() {
    return (
        <div className="bg-panel border-3 border-line p-4">
            <div className="flex justify-end">
                <button className="border-3 border-line bg-panel-dark p-3">Edit profile</button>
            </div>

            <div className="flex gap-3 items-end">
                <div
                    className="size-30 flex items-center justify-center bg-ember border-3 border-accent outline-3 outline-outline shrink-0">
                    <AvatarIcon/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl">Dangeus</h1>
                    <span>Sitting at lo-fi by the river listens to chillhop and post-rock</span>
                    <span>43 / 500 XP</span>
                </div>
                <ul className="flex">
                    <li className="border-3 border-line bg-panel-dark p-2 flex flex-col items-center">
                        <span className="font-bold text-2xl">48</span>
                        <span className="text-muted font-small text-xs"> posts</span>
                    </li>
                    <li className="border-y-3 border-line bg-panel-dark p-2 flex flex-col items-center">
                        <span className="font-bold text-2xl">126</span>
                        <span className="text-muted font-small text-xs">friends</span>
                    </li>
                    <li className="border-3 border-line bg-panel-dark p-2 flex flex-col items-center">
                        <span className="font-bold text-2xl">9</span>
                        <span className="text-muted font-small text-xs">fires</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
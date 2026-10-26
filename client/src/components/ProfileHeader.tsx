import AvatarIcon from "@/components/icons/AvatarIcon";

export default function ProfileHeader() {
    return (
        <div className="bg-panel border-3 border-line p-4">
            <div className="flex justify-end">
                <button className="border-3 border-line bg-panel-dark p-3">Edit profile</button>
            </div>

            <div className="flex gap-3">
                <div className="size-20 flex items-center justify-center bg-ember border-3 border-accent outline-3 outline-outline shrink-0">
                    <AvatarIcon/>
                </div>
                <div>
                    <h1 className="text-4xl">Dangeus</h1>
                    <p>Sitting at lo-fi by the river listens to chillhop and post-rock</p>
                    <p>43 / 500 XP</p>
                </div>
            </div>
        </div>
    )
}
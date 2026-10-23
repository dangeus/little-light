import AvatarIcon from "@/components/icons/AvatarIcon";

export default function ProfileHeader() {
    return (
        <div className="bg-panel border-3 border-line p-4">
            <div className="flex justify-end">
                <button>Edit profile</button>
            </div>

            <div className="flex gap-3">
                <div className="size-20 flex items-center justify-center bg-ember border-3 border-accent outline-3 outline-outline shrink-0">
                    <AvatarIcon/>
                </div>
                <div>
                    <p className="text-4xl">Dangeus</p>
                    <p className="">Sitting at lo-fi by the river listens to chillhop and post-rock</p>
                    <p>43 / 500 XP</p>
                </div>
            </div>
        </div>
    )
}
import AvatarIcon from "@/components/icons/AvatarIcon";
import HeaderStat from "@/components/HeaderStat";

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
                    <HeaderStat value={48} name="posts" borderClass="border-3" />
                    <HeaderStat value={126} name="friends" borderClass="border-y-3" />
                    <HeaderStat value={9} name="fires" borderClass="border-3" />
                </ul>
            </div>
        </div>
    )
}
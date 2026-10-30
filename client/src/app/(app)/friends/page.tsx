import FriendsList from "@/components/FriendsList";

export default function Friends() {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold">Friends</h1>
                <div className="flex items-center gap-3">
                    <input type="text"
                           className="bg-panel-dark border-3 border-line py-2 px-3 w-full max-w-64 focus:outline-3 focus:outline-accent-pale focus:outline-offset-2 placeholder-muted"
                           placeholder="Find people by name"/>
                    <button>Find</button>
                </div>

            </div>

            <FriendsList/>
        </div>

    )
}
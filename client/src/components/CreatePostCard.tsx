function CreatePostButton({children}: { children: string }) {
    return (
        <button className="p-1 border-3 border-ghost-line bg-ghost">{children}</button>
    )
}

export default function CreatePostCard() {
    return (
        <div className="bg-panel border-3 border-line p-4 flex flex-col gap-2">
            <p className="text-2xl font-bold">Share something by the fire</p>
            <textarea rows={3} className="border-3 border-line bg-panel-dark p-2"
                      placeholder="What are you listening to tonight?"/>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <CreatePostButton>Attach track</CreatePostButton>
                    <CreatePostButton>Image</CreatePostButton>
                </div>
                <button className="bg-accent text-black border-3 px-3">Post</button>
            </div>
        </div>
    )
}
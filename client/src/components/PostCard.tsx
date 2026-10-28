import SparkButton from "@/components/SparkButton";

export type Post = {
    id: number;
    author: string;
    time: string;
    title: string;
    text: string;
    sparks: number;
    comments: number;
    track?: { title: string, artist: string };
}

type PostCardProps = {
    post: Post
}

export default function PostCard({post}: PostCardProps) {
    return (
        <div className="bg-panel border-3 border-line p-4 flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="size-10 bg-white border-3 border-panel-dark"/>
                <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-muted text-xs">{post.time}</p>
                </div>
            </div>
            <p className="text-accent-light text-2xl font-bold">{post.title}</p>
            <p className="line-clamp-6 wrap-anywhere">{post.text}</p>
            {post.track && <div className="border-3 border-line bg-panel-dark p-3 flex gap-2 items-center">
                <div className="size-10 bg-accent outline-2 outline-outline -outline-offset-3 border-black"/>
                <div>
                    <p className="leading-4">{post.track.title}</p>
                    <p className="text-sm text-muted">{post.track.artist}</p>
                </div>
            </div>}
            <div className="border-t-2 border-dashed border-line"/>
            <div className="flex justify-between p-4">
                <div className="flex gap-12">
                    <SparkButton initialSparks={post.sparks} />
                    <p>{post.comments} comments</p>
                </div>
                <button className="text-accent">Read more</button>
            </div>
        </div>
    )
}
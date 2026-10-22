import PostCard, {Post} from "@/components/PostCard";
import CreatePostCard from "@/components/CreatePostCard";

export default function PostList() {
    const posts: Post[] = [
        {
            id: 1,
            author: "Dangeus",
            time: "2 hours ago",
            title: "Rainy night playlist",
            text: "Put together a slow playlist for nights when the rain will not stop. Mostly piano and soft guitar, nothing louder than the fire. Come sit in Lo-fi by the river if you want to hear it together.",
            sparks: 24,
            comments: 6,
            track: {
                title: "Embers at Dusk",
                artist: "Pine Hollow",
            },
        },
        {
            id: 2,
            author: "Dangeus",
            time: "Yesterday",
            title: "Looking for long instrumental tracks",
            text: "I need music for focus: 8+ minutes, no vocals, slow build. Post-rock is welcome. Drop your favourites in the comments and I will add them to the room queue. Last week someone sent me a 20-minute ambient piece and I listened to it three times in a row while working on the new room design. More of that, please. Bonus points if it sounds like a forest at night, or like rain on a tent, or like a fire that is almost out but still warm.",
            sparks: 11,
            comments: 14,
        },
        {
            id: 3,
            author: "Dangeus",
            time: "3 days ago",
            title: "Level 12!",
            text: "Thanks to everyone who sat by my fire this week. New hoodie for my character is unlocked, so the next goal is the lantern.",
            sparks: 37,
            comments: 9,
        },
    ];

    return (
        <div className="flex flex-col gap-6  w-200">
            <CreatePostCard/>
            {posts.map((post)=> <PostCard key={post.id} post={post}/>)}
        </div>
    )
}
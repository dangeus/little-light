import PostList from "@/components/PostList";
import CampfiresList from "@/components/CampfiresList";
import FriendsList from "@/components/FriendsList";

export default function Profile() {
    return (
        <div className="flex gap-6">
            <PostList/>
            <div className="flex flex-col gap-6 w-80">
                <CampfiresList/>
                <FriendsList/>
            </div>
        </div>
    )
}
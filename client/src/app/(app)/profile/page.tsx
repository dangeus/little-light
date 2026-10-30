import PostList from "@/components/PostList";
import CampfiresList from "@/components/CampfiresList";
import FriendsList from "@/components/FriendsList";
import ProfileHeader from "@/components/ProfileHeader";

export default function Profile() {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-6">
                <ProfileHeader/>
                <PostList/>
            </div>
            <div className="flex flex-col gap-6">
                <CampfiresList/>
                <FriendsList/>
            </div>
        </div>
    )
}
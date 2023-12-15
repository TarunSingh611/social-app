import React from 'react';
import TabbedNav from '../navbar/TabbedNav';
import UserPost from "../post/userPost";

const ProfileTabsCard = ({ user , Posts}: { user:any, Posts:any }) => {

    const tabConfig = [
        {
            name: "Posts",
            content: <div>Posts</div>
        },
        {
            name: "Timeline",
            content: <UserPost user={user} posts={Posts}/>
        }
    ]
    return <div className="w-full">
        <TabbedNav tabs={tabConfig} />
        
    </div>;    
}

export default ProfileTabsCard
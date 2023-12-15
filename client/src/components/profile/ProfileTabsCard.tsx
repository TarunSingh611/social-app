import React from 'react';
import TabbedNav from '../navbar/TabbedNav';
import UserPost from "../post/userPost";
import GridPost from "../post/gridPost";

const ProfileTabsCard = ({ user, Posts }: { user: any, Posts: any }) => {

    const tabConfig = [
        {
            name: "Timeline",
            content: <UserPost user={user} posts={Posts} />
        },
        {
            name: "Grid",
            content: <GridPost user={user} posts={Posts} />
        }
    ]
    return <div className="w-full">
        <TabbedNav tabs={tabConfig} />

    </div>;
}

export default ProfileTabsCard
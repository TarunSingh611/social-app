import React from 'react';
import TabbedNav from '../navbar/TabbedNav';
import UserPost from "../post/userPost";
import GridPost from "../post/gridPost";

const ProfileTabsCard = ( {Posts}:any ) => {

    const tabConfig = [
        {
            name: "Grid",
            content: <GridPost posts={Posts} />
        },
        {
            name: "Timeline",
            content: <UserPost posts={Posts} />
        }

    ]
    return <div className="w-full">
        <TabbedNav tabs={tabConfig} />

    </div>;
}

export default ProfileTabsCard
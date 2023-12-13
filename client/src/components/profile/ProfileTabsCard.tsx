import React from 'react';
import TabbedNav from '../navbar/TabbedNav';


const ProfileTabsCard = ({ user }: { user:any }) => {

    const tabConfig = [
        {
            name: "Posts",
            content: <div>Posts</div>
        },
        {
            name: "Timeline",
            content: <div>Timeline</div>
        }
    ]
    return <div className="w-full">
        <TabbedNav tabs={tabConfig} />
        
    </div>;    
}

export default ProfileTabsCard
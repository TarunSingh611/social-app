import React from 'react';
import AdditionalDetails from './AdditionalDetails';
import ProfilePrivacy from './ProfilePrivacy\'';
import Security from './Security';
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
        },
        {
            name: "General",
            content: <AdditionalDetails user={user} />
        },
        {
            name: "Privacy",
            content: <ProfilePrivacy user={user} />
        },
        {
            name: "Security",
            content: <Security user={user} />
        }
    ]
    return <div className="w-full">
        <TabbedNav tabs={tabConfig} />
        
    </div>;    
}

export default ProfileTabsCard
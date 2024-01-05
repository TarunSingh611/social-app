'use client';

import { useEffect } from 'react';

export default function UserSpace() {

    useEffect(() => {
       window.location.replace("/userSpace/profile");
    })


    return (
        <div>Loading...</div>
    )

}
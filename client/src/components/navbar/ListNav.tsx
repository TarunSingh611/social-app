'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const navigationItems = [
  { path: '/userSpace/profile', label: 'Profile' },
  { path: '/userSpace/feed', label: 'Feed' },
  { path: '/userSpace/post', label: 'Post' },
  { path: '/userSpace/chats', label: 'Chats' },
  { path: '/userSpace/explore', label: 'Explore' },
  { path: '/userSpace/setting', label: 'Setting' },
];

const ListNav = () => {
  const router = useRouter();
  const  pathname  = usePathname();

  return (
    <ul className="flex flex-col py-4 my-8">
      {navigationItems.map((item) => (
        <li key={item.path} className={`liNav ${pathname === item.path ? 'selected' : ''}`}>
         
            <div className="tabHN" onClick={() => pathname !== item.path && router.push(item.path)}>{item.label}</div>

        </li>
      ))}
    </ul>
  );
};

export default ListNav;
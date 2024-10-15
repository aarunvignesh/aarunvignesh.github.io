// Sidebar.js
import React, {useState} from 'react';
import {updateSidebarState} from './../../stores/sidebar';
import Link from 'next/link';

export const Sidebar = () => {
  let [isSidebarVisible, setSideBarToggle] = useState(updateSidebarState.getState());

  updateSidebarState.subscribe((state:boolean)=>{
    setSideBarToggle(state);
  })

  return (
    <div
      className={`fixed top-10 z-20 left-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
        isSidebarVisible ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="flex flex-col p-4 h-[97vh]">
        <h2 className="text-2xl font-bold">Navigations</h2>
        <div className={`flex flex-col mt-4 flex-wrap justify-evenly justify-around md:w-1/2 text-zinc-400`}>
                <div className={`flex w-auto p-4`}>
                    <Link href="/profile">About me</Link>
                </div>
                <div className={`flex w-auto p-4`}>
                    <Link href="/">Blog</Link>
                </div>
                <div className={`flex w-auto p-4`}>
                    <Link href="/search">Search</Link>
                </div>
        </div>
        <div className={`w-auto mt-auto mb-14`}>
            <a className='w-auto ml-auto mr-4 text-gray-500' href='mailto:a.s.arunvignesh@gmail.com'>Email me!</a>
        </div>
       </div>
    </div>
  )
};
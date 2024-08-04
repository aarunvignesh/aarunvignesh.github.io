// Sidebar.js
import React, {useState} from 'react';
import {updateSidebarState} from './../../stores/sidebar';

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
      <div className="p-4">
        <h2 className="text-2xl font-bold">Navigations</h2>
        <div className={`flex flex-col mt-4 flex-wrap justify-evenly justify-around md:w-1/2 h-full text-zinc-400`}>
                <div className={`flex w-1/4 p-4`}>
                    <a href="/blog">Blogs</a>
                </div>
                <div className={`flex w-1/4 p-4`}>
                    <a href="/blog">Profile</a>
                </div>
                <div className={`flex w-1/4 p-4`}>
                    <a href="/blog">Search</a>
                </div>
        </div>
       </div>
    </div>
  )
};
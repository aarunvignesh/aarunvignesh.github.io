import React, { useState } from 'react';
import { updateSidebarState } from './../../stores/sidebar'

export default function Header (){

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        updateSidebarState.setState(isOpen);
    };

    return (
        <div className={`flex flex-row flex-wrap items-center w-full justify-evenly h-10 z-20 bg-gray-600`}>
            <div className={`flex flex-row w-full md:w-1/2 h-full items-center`}>
                <div className={`h-auto w-10 bg-gray-500 m-2 p-2 rounded`}>
                    <img
                        src="./assets/img/av.png" 
                        alt="Logo"
                        className={`h-full w-full object-contain`} 
                    />
                </div>
                <h1 className={`text-l font-bold text-gray-300 w-auto`}>Arun Vignesh</h1>
                <div className={`flex w-8 h-6 p-1 ml-auto mr-2 pt-1 pb-1 rounded md:hidden bg-gray-300`} onClick={handleClick}>
                    <button className={`flex flex-col justify-center items-center`}>
                        <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
                        </span>
                        <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                        </span>
                        <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
                        </span>
                    </button>
                </div>
            </div>
            <div className={`flex flex-row flex-wrap items-center hidden justify-evenly md:flex md:w-1/2 h-full text-zinc-400`}>
                <div className={`flex w-1/4`}>
                </div>
                <div className={`flex w-1/4`}>
                    <a href="/blog">Blogs</a>
                </div>
                <div className={`flex w-1/4`}>
                    <a href="/blog">Profile</a>
                </div>
                <div className={`flex w-1/4`}>
                    <a href="/blog">Search</a>
                </div>
            </div>
            {/* <div className={`w-1/2 md:w-1/4 h-full`}></div>
            <div className={`w-1/2 md:w-1/4 h-full`}></div> */}
        </div>   
    )
} 

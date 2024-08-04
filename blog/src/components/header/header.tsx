import React, { useState } from 'react';
import { updateSidebarState } from './../../stores/sidebar'

export default function Header (){

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        updateSidebarState.setState(isOpen);
    };

    return (
        <div className={`flex flex-row flex-wrap items-center w-full justify-evenly h-10 z-20 bg-gray-800`}>
            <div className={`flex flex-row w-full md:w-1/3 h-full items-center`}>
                <div className={`h-auto w-10 bg-gray-500 m-2 p-2 rounded`}>
                    <img
                        src="./assets/img/av.png" 
                        alt="Logo"
                        className={`h-full w-full object-contain`} 
                    />
                </div>
                <h1 className={`text-l font-bold text-gray-400 w-auto`}>Arun Vignesh</h1>
                <div className={`flex w-8 h-6 p-1 ml-auto mr-2 pt-1 pb-1 rounded md:hidden bg-gray-400`} onClick={handleClick}>
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
            <div className={`flex flex-row flex-wrap items-center justify-center hidden md:flex md:w-1/3 h-full text-zinc-200`}>
                <div className={`flex w-[110px]`}>
                    <a href="/blog">About me</a>
                </div>
                <div className={`flex w-16 mr-3`}>
                    <a href="/blog">Blogs</a>
                </div>
                <div className={`flex w-16`}>
                    <a href="/blog">Search</a>
                </div>
            </div>
            <div className={`flex flex-row items-center justify-center hidden md:flex md:w-1/3 h-full`}>
                <a className='w-auto ml-auto mr-4 text-gray-500' href='mailto:a.s.arunvignesh@gmail.com'>Email me!</a>
            </div>
            {/* <div className={`w-1/2 md:w-1/4 h-full`}></div>
            <div className={`w-1/2 md:w-1/4 h-full`}></div> */}
        </div>   
    )
} 

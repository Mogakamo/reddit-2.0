import Image from 'next/image'
import React from 'react'
import { MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid"
import { BellIcon, ChatIcon , GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from "@heroicons/react/outline"
import {FcReddit} from 'react-icons/fc'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
                <Image src="https://links.papareact.com/fqy" objectFit='contain' layout="fill" />
            </div>

            <div className='flex items-center mx-7 xl:min-w-[300px]'>
                <HomeIcon className='h-5 w-5' />
                <p className='ml-2 hidden lg:inline flex-1'>Home</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>

            {/* Searchbox */}
            <form className='flex flex-1 items-center space-x-2 border 
            border-gray-200 rounded-sm bg-gray-100 px-3 py-1 '>
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input type="text" className='flex-1 bg-transparent outline-none' placeholder='Search Reddit' />
                <button type='submit' hidden />
            </form>

            <div className='flex items-center text-gray-500 space-x-2
                mx-5 hidden lg:inline-flex'>
                <SparklesIcon className='icon' />
                <GlobeIcon className='icon' />
                <VideoCameraIcon className='icon' />
                <hr className='h-10 border border-gray-100' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <PlusIcon className='icon' />
                <SpeakerphoneIcon className='icon' />
            </div>
            <div className='ml-5 flex items-center lg:hidden'>
                <MenuIcon className='icon' />
            </div>
            {/* Signin/signout  */}
            <div className='hidden lg:flex items-center space-x-2 border
                border-gray-100 p-2 rounded-full'>
                <FcReddit className='icon' />
                <p className='text-gray-400'>Sign in</p>
            </div>
        </div>
    )
}

export default Header

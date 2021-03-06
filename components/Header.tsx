import Image from 'next/image'
import React from 'react'
import {
  MenuIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { FcReddit } from 'react-icons/fc'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/fqy"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Searchbox */}
      <form
        className="flex flex-1 items-center space-x-2 rounded-sm 
            border border-gray-200 bg-gray-100 px-3 py-1 "
      >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div
        className="mx-5 flex hidden items-center
                space-x-2 text-gray-500 lg:inline-flex"
      >
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* Signin/signout  */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden items-center space-x-2 rounded-full border
                border-gray-100 p-2 lg:flex"
        >
          <FcReddit className="icon" />

          <div className='flex-1'>
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden items-center space-x-2 rounded-full border
                border-gray-100 p-2 lg:flex"
        >
          <FcReddit className="icon" />
          <p className="text-gray-400">Sign in</p>
        </div>
      )}
    </div>
  )
}

export default Header

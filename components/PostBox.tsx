import { useSession } from 'next-auth/react'
import React from 'react'

const PostBox = () => {
  const { data: session } = useSession()

  return (
    <form>
      <div className='flex items-center space-x-3'>
        {/* Avatar */}

        <input
          type="text"
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          placeholder={session? 'Create a post by entering a title!' : 'Signin to post!'}
        />
      </div>
    </form>
  )
}

export default PostBox

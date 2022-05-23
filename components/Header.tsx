import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='relative h-10 w-20'>
        <Image src="https://links.papareact.com/fqy" objectFit='contain' layout="fill" />
      </div>
    </div>
  )
}

export default Header

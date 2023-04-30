import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LikeButton from './LikeButton'
import RatingStar from './RatingStar'

const ProductCard = () => {
  return (
    <div>
        <Image 
        src="/assets/images/avatarPictures/avatar1.png"
        height={300}
        width={400}
        alt='avatar1'
        className='rounded-lg'
        />
        <p>Avatar name "Avatown" -nice original avatar of Avatown</p>
        <div className='flex flex-row justify-between items-center'>
            <RatingStar/>
            <p>4.7 & 100Likers</p>
            <LikeButton/>
        </div>
        <div className='flex flex-row items-center space-x-2'>
            <img src="/assets/images/avatarPictures/avatar1.png" className= ' w-8 h-8 rounded-full ' />
            <p>Avatar Joes</p>
        </div>
        <div className='flex flex-row space-x-2'>
            <div className='w-6 h-6 rounded-full bg-blue-400'></div>
            <p>PC Only</p>
        </div>
        <Link href={""}>Auto Upload Service ready , you can use this avatar within 24 hours</Link>
    </div>
  )
}

export default ProductCard
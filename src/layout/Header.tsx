import Image from 'next/image'
import React from 'react'
import logo from "../../public/assets/images/logo/logo_avatown_2.png"
import notification from "../../public/assets/icons/notification.png"
import cart from "../../public/assets/icons/grocery-store.png"
import Searchbar from '@/components/Searchbar'

const Header = () => {
  return (
    <div className='fixed z-10 bg-gradient-to-r from-blue-900  to-purple-600 h-16 w-full flex flex-row items-center text-white'>
        <Image src={logo} height={100} width={150} alt='logo 1' className='pl-6'/>
        <button className=' underline hover:underline-offset-4 pl-24 '>Go to Marketpage</button>
        <div className='flex flex-row fixed right-6 space-x-6'>
            <Searchbar/>
            <Image src={notification} height={20} width={30} alt='noti icon' />
            <Image src={cart} height={20} width={30} alt='cart icon' />
            <img src='/assets/images/avatarPictures/avatar1.png' className='h-8 w-8 rounded-full' />
        </div>
    </div>
  )
}

export default Header
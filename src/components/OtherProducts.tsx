import { avatars } from '@/models/ProductCard'
import React from 'react'
import ProductCard from './ProductCard'
import { useRouter } from 'next/router'

const OtherProducts = () => {
    const router = useRouter();
    const productId = router.query.product;

    const newArray = avatars.filter(obj => obj.id !== productId);
  return (
    <div className=' relative top-16 left-6 bg-white px-10 mt-10 rounded-xl h-[1390px] overflow-x-hidden overflow-y-auto'>
        <h1 className='text-2xl font-bold py-4'>Other Products</h1>
        {
            newArray.map((avatar)=>{
                return <ProductCard key={avatar.id} avatar={avatar} />
            })
        }
    </div>
  )
}

export default OtherProducts
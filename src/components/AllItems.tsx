import React from 'react'
import ProductCard from './ProductCard'
import { avatars } from '@/models/ProductCard'

const AllItems = () => {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
        {
          avatars.map((avatar)=>{
            return <ProductCard avatar={avatar} />
          })
        }
        </div>
    </div>
  )
}

export default AllItems
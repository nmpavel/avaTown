import React from 'react'
import ProductCard from './ProductCard'
import { avatars } from '@/models/ProductCard'

const HumanBased = () => {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
        {
          avatars.map((avatar)=>{
            return <ProductCard key={avatar.id} avatar={avatar} />
          })
        }
        </div>
    </div>
  )
}

export default HumanBased
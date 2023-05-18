import React from 'react'
import { avatars } from '@/models/ProductCard'
import ProductCard from '@/components/ProductCard'
import Layout from '@/layout/Layout'

const HumanBased = () => {
  return (
    <Layout>
         <div>
            <p>Human Based</p>
         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
        {
          avatars.map((avatar)=>{
            return <ProductCard key={avatar.id} avatar={avatar} />
          })
        }
        </div>
         </div>
    </Layout>    
  )
}

export default HumanBased
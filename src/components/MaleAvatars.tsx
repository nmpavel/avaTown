import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { avatars } from '@/models/ProductCard'
import Pagination from './Paginator';

const MaleAvatars = () => {
    const maleAvatars = avatars.filter(obj=>obj.category==="Male");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; 
  
    const totalAvatars = maleAvatars.length;
    const totalPages = Math.ceil(totalAvatars / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentAvatars = maleAvatars.slice(startIndex, endIndex);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
        {
        currentAvatars.map((avatar)=>{
            return <ProductCard key={avatar.id} avatar={avatar} />
          })
        }
        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default MaleAvatars
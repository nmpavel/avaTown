import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingStar = () => {
    const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  
  return (
    <div>
        <Rating
        onClick={handleRating}
      />
    </div>
  )
}

export default RatingStar
import React, { useState } from 'react'
import styles from "../styles/LikeButton.module.css"

const LikeButton = () => {
  const [like, setLike] = useState<boolean>(false);
  return (
      <div onClick={()=>setLike(!like)} className={`${styles.heart} transition-all duration-300  ${like && styles.clickedHeart}`}>

      </div>
  );
}

export default LikeButton
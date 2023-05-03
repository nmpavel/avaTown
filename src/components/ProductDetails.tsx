import { Product, avatars } from "@/models/ProductCard";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import link from "../../public/assets/icons/link.png";
import UploadIcon from "@/Icons/UploadIcon";
import RatingStar from "./RatingStar";
import LikeButton from "./LikeButton";
import OtherProducts from "./OtherProducts";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.product;
  const [showLink, setShowLink] = useState<boolean>(false);
  const product: Product | undefined = avatars.find(
    (avatar) => avatar.id === productId
  );
  console.log(product);
  return (
    <div className=" w-full h-screen bg-gray-200 flex flex-row">
      <div className="flex w-[1200px] h-[600px] relative top-40 left-6 bg-white rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-purple-400 h-full w-[1200px] px-8 flex overflow-hidden justify-center items-center">
          <img
            src={product?.image}
            className=" h-[500px] w-[900px] hover:scale-150 transition-all duration-500"
          />
        </div>
        <div className=" w-[1600px] space-y-4 py-6 px-12">
          <div className="flex space-x-6">
            <p className=" text-4xl font-bold">{product?.name}</p>
            <div>
              {showLink && (
                <div className=" cursor-pointer absolute z-50 top-20 right-9 flex flex-row w-24 space-x-2 border-2 border-gray-400 rounded-lg py-1 px-2">
                  <Image src={link} height={15} width={15} alt="link" />
                  <p className="text-xs whitespace-nowrap">Copy Link</p>
                </div>
              )}
             <div className="border-2 p-2 border-purple-600">
             <UploadIcon
                onMouseOver={() => setShowLink(!showLink)}
                className=" cursor-pointer "
              />
             </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <RatingStar />
            <p>4.7/5.0</p>
            <p className=" text-gray-500 font-light">1400 likes</p>
          </div>
          <div className="flex justify-between">
            <div className="flex text-3xl font-bold">
              <p>$</p>
              <p>{product?.price}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <LikeButton />
              <p className=" font-light">Save to wishlist</p>
            </div>
          </div>
          <div>
            <p>
              {product?.descrip}
              <button className="pl-1 font-semibold">Read More.</button>{" "}
            </p>
          </div>
          <div className="  inline-block text-left relative whitespace-nowrap align-top border-[1px] rounded-3xl ">
            <input
              type="button"
              value="-"
              className=" inline-block align-top pl-2 pr-3 py-2 h-[41px] w-[45px] cursor-pointer text-2xl font-bold hover:text-red-600 "
            />
            <input
              step="1"
              min="1"
              max=""
              name="quantity"
              value="1"
              title="Qty"
              className=" w-[40px] h-[41px] py-1 text-center bg-transparent border-[1px] border-black "
              pattern=""
            />
            <input
              type="button"
              value="+"
              className=" inline-block align-top pl-2 pr-3 py-2 h-[41px] cursor-pointer w-[45px] font-bold hover:text-green-600 "
            />
          </div>
          <div className="flex flex-row justify-between pt-12">
            <button className=" bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-white
             hover:text-blue-900 hover:border hover:border-blue-900">
              Buy Now
            </button>
            <button className=" bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-white
             hover:text-purple-600 hover:border hover:border-purple-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <OtherProducts/>
    </div>
  );
};

export default ProductDetails;

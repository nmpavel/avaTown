import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import RatingStar from "./RatingStar";
import UploadIcon from "@/Icons/UploadIcon";
import cart from "../../public/assets/icons/shopping-cart.png";
import link from "../../public/assets/icons/link.png";
import { Product } from "@/models/ProductCard";

interface ProductCardProps {
  avatar: Product;
}

const ProductCard = ({ avatar }: ProductCardProps) => {
  const [showLink, setShowLink] = useState<boolean>(false);
  
  return (
    <div className="space-y-[1px] text-sm w-96">
      <Link href={avatar.id}>
        <div className="relative">
          <Image
            src={avatar.image}
            height={300}
            width={385}
            alt="avatar1"
            className="rounded-lg"
          />
          <button className="absolute top-2 right-4 flex space-x-2 bg-blue-600 p-1 rounded-lg">
            <Image src={cart} height={20} width={20} alt="cart" />
            <p className="text-white">Add</p>
          </button>
        </div>
      </Link>
      <p className=" text-base font-semibold">
        Avatar name &quot;Avatown&quot; -nice original avatar of Avatown
      </p>
      <div className="flex flex-row justify-between items-center">
        <RatingStar />
        <p>4.7 & 100Likers</p>
        <LikeButton />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <img
          src="/assets/images/avatarPictures/avatar1.png"
          className=" w-8 h-8 rounded-full "
        />
        <p>Avatar Joes</p>
      </div>
      <div className="flex items-center text-xs">
        <p className="font-semibold ">$</p>
        <p className=" text-xl font-semibold">50.00</p>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="w-6 h-6 rounded-full bg-blue-400"></div>
        <p>PC Only</p>
      </div>
      <div className="flex flex-row relative">
        <p>
          Auto Upload Service ready , you can use this avatar within 24 hours
        </p>
        <div>
          {showLink && (
            <div id="link" className=" cursor-pointer absolute z-50 right-0 -top-8 flex flex-row w-24 space-x-2 border-2 border-gray-400 rounded-lg py-1 px-2">
              <Image src={link} height={15} width={15} alt="link" />
              <p className="text-xs whitespace-nowrap">Copy Link</p>
            </div>
          )}
          <UploadIcon
            onClick={() => setShowLink(!showLink)}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

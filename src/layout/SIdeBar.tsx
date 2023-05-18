import Checkbox from "@/components/Checkbox";
import { useSidebarContext } from "@/contexts/SidebarContext";
import Link from "next/link";
import React, { useState } from "react";

const SIdeBar = () => {
  const { show, subCategory, subSubCategory, setShow, setSubCategory, setSubSubCategory } = useSidebarContext();

  return (
    <div className=" fixed  w-64 text-xs pl-6 pt-10 ">
        {/* Category Container */}
      <div className="flex flex-col justify-start items-start">
        <h1 className="font-semibold">Category</h1>
        <div className="flex flex-col justify-start items-start pl-2">
        <button
          className={`${show === "fullAvatar" && "underline"}`}
          onClick={() => setShow("fullAvatar")}
        >
          Full Aavatar
        </button>
        {show === "fullAvatar" && (
          <div className="pl-2">
            <button
              
              className={`${subCategory === "human" ? " underline" : " "}`}
              onClick={() => setSubCategory("human")}
            >
              Human Based
            </button>
            {subCategory === "human" && (
              <div className="flex flex-col pl-2">
                <Link
                  href={""}
                  className={`${
                    subSubCategory === "male" ? " underline" : " "
                  }`}
                  onClick={() => setSubSubCategory("male")}
                >
                  Male
                </Link>
                <Link
                  href={""}
                  className={`${
                    subSubCategory === "female" ? " underline" : " "
                  }`}
                  onClick={() => setSubSubCategory("female")}
                >
                  Female
                </Link>
              </div>
            )}
            <button
              className={`${subCategory === "animal" ? " underline" : " "}`}
              onClick={() => setSubCategory("animal")}
            >
              Animal & Mythical Creature Based
            </button>
            <button
              className={`${subCategory === "robot" ? " underline" : " "}`}
              onClick={() => setSubCategory("robot")}
            >
              Robot Based
            </button>
          </div>
        )}
        <button
          className={`${show === "others" && "underline"}`}
          onClick={() => setShow("others")}
        >
          Others
        </button>
        {show === "others" && <div>Other</div>}
        </div>
      </div>

      {/* Contents Container */}
      <div>
        <h1 className="font-semibold">Contents</h1>
        <div className="flex flex-col pl-2">
           <Checkbox label="VRChat(Quest)" />
           <Checkbox label="VRChat(PCVR)" />
           <Checkbox label="Others" />
        </div>
      </div>
      
      {/* Price Container */}
      <div>
        <h1 className="font-semibold">Price</h1>
        <div className="flex flex-col pl-2">
           <Checkbox label="Under $10" />
           <Checkbox label="$10 to $20" />
           <Checkbox label="$20 to $30" />
           <Checkbox label="$30 to $40" />
           <Checkbox label="$40 to $50" />
           <Checkbox label="$50 to $60" />
           <Checkbox label="$60 to $70" />
           <Checkbox label="$70 & above" />
        </div>
      </div>

            {/* Polygon Amount Container */}
            <div className="">
        <h1 className="font-semibold">Polygon Amount</h1>
        <div className="flex flex-col pl-2">
           <Checkbox label="Under △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
           <Checkbox label="△7500 to △7500" />
        </div>
      </div>
    
          {/* Auto Upload*/}
          <div>
        <h1 className="font-semibold">Auto Upload Support</h1>
        <div className="flex flex-col pl-2">
           <Checkbox label="Supported" />
           <Checkbox label="Unsupported" />
        </div>
      </div>

    </div>
  );
};

export default SIdeBar;

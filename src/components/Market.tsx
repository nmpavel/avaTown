import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Select from "react-select";
import { DownArrow } from "@/Icons/DownArrow";
import { avatars } from "@/models/ProductCard";
import AllItems from "./AllItems";
import { useSidebarContext } from "@/contexts/SidebarContext";
import MaleAvatars from "./MaleAvatars";
import FemaleAvatars from "./FemaleAvatars";

import { PaginatedData } from "@/constants/common";
import { Product } from "@/models/ProductCard";

const options = [
  { value: "LtoH", label: "Price: Low to High" },
  { value: "HtoL", label: "Price: High to Low" },
  { value: "review", label: "Customer Review" },
  { value: "new", label: "New" },
];
const reactSelectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "",
    width: "120px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    color: "white",
    boxShadow: "none",
    isFocused: "transparent",
    placeholderColor: "white",
    placeholder: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "black",
      };
    },
  }),
};
const reactSelectTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    color: "black",
    border: 0,
  },
  neutral50: "black",
});

const Market = () => {
  const { show, subCategory, subSubCategory } = useSidebarContext();
  const [currentPage, setPage] = useState<number>(1);
  const [window, setWindow] = useState<string>("allItems");
  return (
    <div className=" ">
      <div className="flex justify-between items-center py-3">
        {show === "fullAvatar" ? (
          <h1 className="text-lg font-bold">{`Full Avatar
            ${subCategory === "human" ? "-> Human Based" : ""}
            ${subSubCategory === "male" ? "-> Male" : ""} ${
            subSubCategory === "female" ? "-> Female" : ""
          }  `}</h1>
        ) : (
          <h1 className="text-lg font-bold">All Items</h1>
        )}
        <Select
          onChange={(e) => {
            console.log(e);
          }}
          options={options}
          className="text-black w-48 bg-gray-100"
          styles={reactSelectStyles}
          theme={reactSelectTheme}
          placeholder={<div>Select</div>}
          components={{
            DropdownIndicator: () => <DownArrow />,
            IndicatorSeparator: () => null,
          }}
        />
      </div>

      <div>
        {subCategory !== "human" && <></>}
        {subSubCategory ? <></> : <AllItems />}
        {show === "fullAvatar" &&
          subCategory === "human" &&
          subSubCategory === "male" && <MaleAvatars />}
        {show === "fullAvatar" &&
          subCategory === "human" &&
          subSubCategory === "female" && <FemaleAvatars />}
      </div>
      
    </div>
  );
};

export default Market;

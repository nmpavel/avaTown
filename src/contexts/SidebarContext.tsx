import { createContext, useState } from "react";

interface SidebarContextType {
    show: string;
    subCategory: string;
    subSubCategory: string;
    setShow: (show: string) => void;
    setSubCategory: (subCategory: string) => void;
    setSubSubCategory: (subSubCategory: string) => void;
  }
  
  export const SidebarContext = createContext<SidebarContextType>({
    show: "",
    subCategory: "",
    subSubCategory: "",
    setShow: () => {},
    setSubCategory: () => {},
    setSubSubCategory: () => {},
  });

  const SidebarContextProvider = () => {
    const [show, setShow] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [subSubCategory, setSubSubCategory] = useState("");
  
    return (
      <SidebarContext.Provider
        value={{ show, subCategory, subSubCategory, setShow, setSubCategory, setSubSubCategory }}
      >
        {/* your sidebar code */}
      </SidebarContext.Provider>
    );
  };
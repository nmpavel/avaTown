import SIdeBar from "@/layout/SIdeBar";
import { ReactNode, createContext, useContext, useState } from "react";

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
  type SidebarContextProviderProps ={
    children: ReactNode;
  }
  export const useSidebarContext = () => useContext(SidebarContext);
  
  const SidebarContextProvider = ({children}:SidebarContextProviderProps) => {
    const [show, setShow] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [subSubCategory, setSubSubCategory] = useState("");
  
    return (
      <SidebarContext.Provider
        value={{ show, subCategory, subSubCategory, setShow, setSubCategory, setSubSubCategory }}
      >
        <SIdeBar/>
      </SidebarContext.Provider>
    );
  };
  export default SidebarContextProvider;
import { ReactNode } from "react";
import SIdeBar from "./SIdeBar";
import Header from "./Header";
import SidebarContextProvider from "@/contexts/SidebarContext";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    
     
       <div className=" flex  flex-col h-screen ">
        <Header />
        <div className="flex relative top-16 ">
          <SIdeBar />
          <main className="flex-1 absolute right-6 overflow-y-auto  ">{children}</main>
        </div>
      </div>
  
   
  );
};

export default Layout;

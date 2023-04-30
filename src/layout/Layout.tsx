import { ReactNode } from "react";
import SIdeBar from "./SIdeBar";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    
      <div className="flex flex-col h-screen ">
        <Header />
        <div className="flex ">
          <SIdeBar />
          <main className="flex-1 overflow-y-auto ">{children}</main>
        </div>
      </div>
   
  );
};

export default Layout;

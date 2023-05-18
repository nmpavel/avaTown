import { ReactNode } from "react";
import SIdeBar from "./SIdeBar";
import Header from "./Header";
import SidebarContextProvider from "@/contexts/SidebarContext";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SidebarContextProvider>
      <div className=" flex  flex-col h-screen ">
        <Header />
        <div className="flex relative top-16 ">
          <SIdeBar />
          <main className="flex-1 absolute left-48  overflow-y-auto  ">
            {children}
          </main>
        </div>
      </div>
    </SidebarContextProvider>
  );
};

export default Layout;

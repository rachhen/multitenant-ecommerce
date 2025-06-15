import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;

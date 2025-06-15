import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

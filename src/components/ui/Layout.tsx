import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="w-full pt-16 bg-white min-h-screen">{children}</main>
      <div className="bg-black h-auto min-h-[50px]"></div>
    </div>
  );
};

export default Layout;

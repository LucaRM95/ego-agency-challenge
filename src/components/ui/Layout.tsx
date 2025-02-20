import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="w-full pt-16 bg-white">{children}</main>
    </div>
  );
};

export default Layout;

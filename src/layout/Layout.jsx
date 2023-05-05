import React from "react";
import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkmode.isDarkMode);
  return (
    <div className={`${isDark ? `bg-slate-400` : `bg-white`}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

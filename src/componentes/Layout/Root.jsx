import React from "react";
import Navear from "../Navear";
import { Outlet } from "react-router";
import Footer from "../Footer";

const Root = () => {
  return (
    <div>
   <Navear/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

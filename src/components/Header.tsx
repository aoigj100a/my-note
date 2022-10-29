import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "./logo/logo";

const Header = () => {
  return (
     <div className="flex justify-between items-center shadow px-[20px] py-[20px]">
     <h1 className="text-[30px] font-medium">
       <Link to="/"><Logo /></Link>
     </h1>
     <div>
       <Button className="mr-[8px]">
         <Link to="/dashboard">Dashboard</Link>
       </Button>
       <Button className="mr-[8px]">
         <Link to="/todo">Todos</Link>
       </Button>
     </div>
   </div>
  );
};

export default Header;

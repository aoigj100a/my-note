import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button";

const DefaultLayout: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center shadow px-[20px] py-[20px]">
        <h1 className="text-[30px] font-medium">
          <Link to="/">MyNote</Link>
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

      <Outlet />
    </section>
  );
};

export default DefaultLayout;

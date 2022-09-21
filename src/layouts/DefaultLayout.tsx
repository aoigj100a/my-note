import React from "react";
import { Outlet, Link } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center shadow px-[20px] py-[20px]">
        <h1 className="text-[30px] font-medium">
          <Link to="/">
          MyNote
          </Link>
          </h1>
        <div>
          <button className="px-[8px] py-[2px] border rounded mr-[8px]">
            <Link to="/dashboard">Dashboard</Link>
          </button>
          <button className="px-[8px] py-[2px] border rounded">
            <Link to="/todo">Todos</Link>
          </button>
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default DefaultLayout;

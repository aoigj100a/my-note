import React from "react";
import { Switch } from "@chakra-ui/react";
const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <div className="w-3/12 bg-white p-3">
        <div className="flex items-center space-x-4 p-2 mb-5">
          <img
            className="h-12 rounded-full"
            src="http://www.gravatar.com/avatar/2ab3364752d17f65f?s=260&d=mp"
            alt="James Bhatta"
          />
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              liou lou
            </h4>
            <span className="text-sm tracking-wide flex items-center space-x-1">
              <Switch size="sm" colorScheme="teal" />
              <span className="text-gray-600">冰箱有無物品</span>
            </span>
          </div>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
            >
              <span>鐵櫃</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span>書櫃</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span>桌子</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 bg-slate-50">
        <div className="p-4 flex flex-col items-center justify-center">
          <div
            className=" w-9/12
          p-[24px] bg-white rounded shadow-lg mt-[40px] mb-[8px]"
          >
            <div className="font-medium text-[24px] mb-[8px]">鐵櫃區</div>
            <div className="grid grid-cols-2 grid-rows-3 gap-[16px]">
              <div className="bg-[#ccc] h-[120px]">1</div>
              <div className="bg-[#ccc] h-[120px]">2</div>
              <div className="bg-[#ccc] h-[120px]">3</div>
              <div className="bg-[#ccc] h-[120px]">4</div>
              <div className="bg-[#ccc] h-[120px]">5</div>
              <div className="bg-[#ccc] h-[120px]">6</div>
            </div>
          </div>
          要整理好環境喔...
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

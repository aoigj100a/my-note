import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <div className="flex items-center" onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#EDF2F7" />
        <path
          d="M23.7918 16.5416H17.5418V22.7916H15.4585V16.5416H9.2085V14.4583H15.4585V8.20831H17.5418V14.4583H23.7918V16.5416Z"
          fill="black"
        />
      </svg>
      <span className="ml-[8px]">新增待辦</span>
    </div>
  );
};

export default AddButton;

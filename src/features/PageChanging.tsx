import React from "react";

type Props = {
  table;
};

const PageChanging: React.FC<Props> = ({ table }) => {
  return (
    <div className="flex items-center">
      <span>顯示</span>
      <select
        className="select w-[80px] h-[40px] mx-[4px] 
                  rounded border-[2px] border-[#ccc]"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <span>頁</span>
    </div>
  );
};

export default PageChanging;

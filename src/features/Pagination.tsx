import React from "react";

type Props = {
  table;
};

const Pagination: React.FC<Props> = ({ table }) => {
  return (
    <div className="flex items-center">
      <span>
        共 {table.getState().pagination.pageIndex + 1}頁 第{" "}
        {table.getPageCount()} 頁
      </span>
      <div className="flex">
        <button
          className="p-1 mx-[2px]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="p-1 mx-[2px]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;

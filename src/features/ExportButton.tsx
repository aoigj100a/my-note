import React from "react";
import { CSVLink, CSVDownload } from "react-csv";

type Props = {
  data: [];
};

const ExportButton: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex items-center">
      <svg
        width="25"
        height="25"
        viewBox="0 0 225 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M155.296 84.2473H140.412V37.4432C140.412 32.2948 136.2 28.0824 131.051 28.0824H93.6081C88.4597 28.0824 84.2473 32.2948 84.2473 37.4432V84.2473H69.3636C61.0325 84.2473 56.8201 94.3569 62.7174 100.254L105.684 143.22C109.334 146.871 115.232 146.871 118.882 143.22L161.848 100.254C167.746 94.3569 163.627 84.2473 155.296 84.2473ZM46.8041 177.855C46.8041 183.004 51.0164 187.216 56.1649 187.216H168.495C173.643 187.216 177.855 183.004 177.855 177.855C177.855 172.707 173.643 168.494 168.495 168.494H56.1649C51.0164 168.494 46.8041 172.707 46.8041 177.855Z"
          fill="black"
        />
      </svg>
      <CSVLink data={data} filename={"我的待辦清單.csv"}>
        <span className="ml-[8px]">下載報表</span>
      </CSVLink>
    </div>
  );
};

export default ExportButton;

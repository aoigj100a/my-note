import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

import ExportButton from "../features/ExportButton";
import AddButton from "../features/AddButton";
import Modal from "../components/Modal";

const TodoPage: React.FC = () => {
  return (
    <>
      <div className="pt-[20px] max-w-[1280px] mx-auto my-0">
        <Modal>demo</Modal>
        <section className="flex justify-between">
          <AddButton />
          <ExportButton />
        </section>
      </div>
      <div className="flex justify-between py-[20px] max-w-[1280px] mx-auto my-0">
        <div className="flex items-center">
          <span>Show rows per page</span>
          <NumberInput className="w-[80px] ml-[8px]" min={1} max={10} size="sm">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className="flex items-center">
          <span>1-8 of 32</span>
          <div className="flex">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M15.2188 16L18.5188 19.3L17.5762 20.2427L13.3335 16L17.5762 11.7573L18.5188 12.7L15.2188 16Z"
                    fill="#2D3748"
                  />
                </g>
              </svg>
            </span>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7814 16L13.4814 12.7L14.4241 11.7573L18.6668 16L14.4241 20.2427L13.4814 19.3L16.7814 16Z"
                  fill="#2D3748"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto my-0">
        <TableContainer className="m-2">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>
                  <Checkbox />
                </Th>
                <Th>任務標題</Th>
                <Th>詳情</Th>
                <Th>操作</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>購物</Td>
                <Td>日用品</Td>
                <Td className="flex items-center">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 21.825V25.625C3.75 25.975 4.025 26.25 4.375 26.25H8.175C8.3375 26.25 8.5 26.1875 8.6125 26.0625L22.2625 12.425L17.575 7.73748L3.9375 21.375C3.8125 21.5 3.75 21.65 3.75 21.825V21.825ZM25.8875 8.79998C26.375 8.31248 26.375 7.52498 25.8875 7.03748L22.9625 4.11248C22.475 3.62498 21.6875 3.62498 21.2 4.11248L18.9125 6.39998L23.6 11.0875L25.8875 8.79998Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.39946 24.6985C8.39946 26.0848 9.53373 27.2191 10.9201 27.2191H21.0024C22.3888 27.2191 23.523 26.0848 23.523 24.6985V9.57494H8.39946V24.6985ZM11.4998 15.7252L13.2768 13.9482L15.9612 16.62L18.6331 13.9482L20.4101 15.7252L17.7383 18.397L20.4101 21.0689L18.6331 22.8459L15.9612 20.174L13.2894 22.8459L11.5124 21.0689L14.1842 18.397L11.4998 15.7252ZM20.3723 5.79404L19.112 4.53374H12.8105L11.5502 5.79404H7.13916V8.31464H24.7833V5.79404H20.3723Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>鐵人賽</Td>
                <Td>day-10</Td>
                <Td className="flex items-center">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 21.825V25.625C3.75 25.975 4.025 26.25 4.375 26.25H8.175C8.3375 26.25 8.5 26.1875 8.6125 26.0625L22.2625 12.425L17.575 7.73748L3.9375 21.375C3.8125 21.5 3.75 21.65 3.75 21.825V21.825ZM25.8875 8.79998C26.375 8.31248 26.375 7.52498 25.8875 7.03748L22.9625 4.11248C22.475 3.62498 21.6875 3.62498 21.2 4.11248L18.9125 6.39998L23.6 11.0875L25.8875 8.79998Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.39946 24.6985C8.39946 26.0848 9.53373 27.2191 10.9201 27.2191H21.0024C22.3888 27.2191 23.523 26.0848 23.523 24.6985V9.57494H8.39946V24.6985ZM11.4998 15.7252L13.2768 13.9482L15.9612 16.62L18.6331 13.9482L20.4101 15.7252L17.7383 18.397L20.4101 21.0689L18.6331 22.8459L15.9612 20.174L13.2894 22.8459L11.5124 21.0689L14.1842 18.397L11.4998 15.7252ZM20.3723 5.79404L19.112 4.53374H12.8105L11.5502 5.79404H7.13916V8.31464H24.7833V5.79404H20.3723Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>折棉被</Td>
                <Td></Td>
                <Td className="flex items-center">
                  <span className="cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 21.825V25.625C3.75 25.975 4.025 26.25 4.375 26.25H8.175C8.3375 26.25 8.5 26.1875 8.6125 26.0625L22.2625 12.425L17.575 7.73748L3.9375 21.375C3.8125 21.5 3.75 21.65 3.75 21.825V21.825ZM25.8875 8.79998C26.375 8.31248 26.375 7.52498 25.8875 7.03748L22.9625 4.11248C22.475 3.62498 21.6875 3.62498 21.2 4.11248L18.9125 6.39998L23.6 11.0875L25.8875 8.79998Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="cursor-pointer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.39946 24.6985C8.39946 26.0848 9.53373 27.2191 10.9201 27.2191H21.0024C22.3888 27.2191 23.523 26.0848 23.523 24.6985V9.57494H8.39946V24.6985ZM11.4998 15.7252L13.2768 13.9482L15.9612 16.62L18.6331 13.9482L20.4101 15.7252L17.7383 18.397L20.4101 21.0689L18.6331 22.8459L15.9612 20.174L13.2894 22.8459L11.5124 21.0689L14.1842 18.397L11.4998 15.7252ZM20.3723 5.79404L19.112 4.53374H12.8105L11.5502 5.79404H7.13916V8.31464H24.7833V5.79404H20.3723Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TodoPage;

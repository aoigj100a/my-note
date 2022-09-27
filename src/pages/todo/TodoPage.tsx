import React from "react";
import { useState, useMemo, HTMLProps, useRef, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import ExportButton from "../../features/ExportButton";
import AddButton from "../../features/AddButton";
import TodoModal from "./TodoModal";

const TodoPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState<any>(() => [
    { time: "2018-07-22", title: "購物", info: "日用品", checked: false },
    { time: "2022-09-15", title: "鐵人賽", info: "day-10", checked: true },
    { time: "2022-09-25", title: "摺棉被", info: "", checked: false },
  ]);
  const [rowSelection, setRowSelection] = useState({});
  const [data, setData] = useState(() => [...list]);

  useEffect(() => setData([...list]), [list]);

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            className="form-input border-[2px] rounded border-gray-300 w-[20px] h-[20px]"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              className="form-input border-[2px] rounded border-gray-300 w-[20px] h-[20px]"
              {...{
                checked: row.getIsSelected(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      { header: "時間", accessorKey: "time" },
      { header: "任務標題", accessorKey: "title" },
      { header: "詳情", accessorKey: "info" },
    ],
    []
  );
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function IndeterminateCheckbox({
    indeterminate,
    className = "",
    ...rest
  }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const ref = useRef<HTMLInputElement>(null!);

    useEffect(() => {
      if (typeof indeterminate === "boolean") {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }, [ref, indeterminate]);

    return (
      <input
        type="checkbox"
        ref={ref}
        className={className + " cursor-pointer"}
        {...rest}
      />
    );
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const onSubmit = (data) => {
    setList([...list, data]);
    if (isOpen) setIsOpen(false);
    reset();
    console.log("list", list);
  };

  return (
    <>
      <TodoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <div className="pt-[20px] max-w-[1280px] mx-auto my-0">
        <section className="flex justify-between">
          <AddButton onClick={() => setIsOpen(true)} />
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
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr>
                  {headerGroup.headers.map((header) => (
                    <Th>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TodoPage;

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
import { useForm } from "react-hook-form";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";

import ExportButton from "../../features/ExportButton";
import AddButton from "../../features/AddButton";
import PageChanging from "../../features/PageChanging";
import Pagination from "../../features/Pagination";
import TodoModal from "./TodoModal";

const TodoPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState<any>(() => [
    {
      id: "0",
      time: "2018-07-22",
      title: "購物",
      info: "日用品",
      checked: false,
    },
    {
      id: "1",
      time: "2022-09-15",
      title: "鐵人賽",
      info: "day-10",
      checked: true,
    },
    {
      id: "2",
      time: "2022-09-25",
      title: "摺棉被",
      info: "早上就是要摺棉被",
      checked: false,
    },
  ]);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);

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
          <div>
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
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
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
          <ExportButton data={list} />
        </section>
      </div>

      <div className="flex justify-between py-[20px] max-w-[1280px] mx-auto my-0">
        <PageChanging table={table} />
        <Pagination table={table} />
      </div>
      <div className="max-w-[1280px] mx-auto my-0">
        <TableContainer className="m-2">
          <Table variant="striped">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr>
                  {headerGroup.headers.map((header) => (
                    <Th
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </Th>
                  ))}
                  <Th>操作</Th>
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
                  <Td>
                    <button
                      className="px-[2px]"
                      id={row.id}
                      onClick={(e) => {
                        const id = e.currentTarget.id;
                        const currentItem = list[id];

                      }}
                    >
                      修改
                    </button>
                    <button
                      className="px-[2px]"
                      id={row.id}
                      onClick={(e) => {
                        const id = e.currentTarget.id;
                        const currentItem = list[id];
                        const nowList = list.filter((i) => i !== currentItem);
                        setList(nowList);
                      }}
                    >
                      刪除
                    </button>
                  </Td>
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

import React from "react";
import { useState } from "react";
import AddButton from "../../features/AddButton";
import HomeModal from "./HomeModal";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  selectModalIsOpen,
  openModal,
  closeModal,
} from "../../redux/modalSlice/modalSlice";
import { selectList, addTodo } from "../../redux/todoSlice/todoSlice";
import { useForm } from "react-hook-form";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectModalIsOpen);
  const list = useAppSelector(selectList);

  const [todo, setTodo] = useState(()=>list[list.length - 1]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  console.log("list", list, "isOpen", isOpen);
  const onSubmit = (data) => {
    // setList([...list, data]);
    dispatch(addTodo(data));
    if (isOpen) dispatch(closeModal());
    reset();
    console.log("list", list);
  };
  return (
    <>
      <HomeModal
        isOpen={isOpen}
        closeModal={() => dispatch(closeModal())}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        reset={reset}
      />

      <section className="max-w-[1200px] mx-auto my-0 pt-[40px]">
        <div className="flex items-center justify-between">
          <AddButton onClick={() => dispatch(openModal())} />
          <div className="flex flex-col justify-center ml-[8px] px-[8px]  w-[800px] pr-[8px]">
            <div className="w-full flex">
              <div className="w-2/12 flex items-center justify-center bg-gray-200 rounded-l-xl">
                已釘選
              </div>
              <div className="bg-slate-50 w-full pl-[8px]">
                <h3 className="">{todo.title}</h3>
                <div className="text-sm">{todo.info}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
          <ul className="flex justify-between">
            <li className="p-[8px] mr-[16px] h-[600px] w-[450px] bg-gray-300">
              鐵櫃
            </li>
            <li className="p-[8px] mr-[16px] h-[600px] w-[450px] bg-gray-300">
              書櫃
            </li>
            <li className="p-[8px] mr-[16px] h-[600px] w-[450px] bg-gray-300">
              桌子
            </li>
            <li className="p-[8px] h-[600px] w-[450px] bg-gray-300">冰箱</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;

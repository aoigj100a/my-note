import React from "react";
import Modal from "../../components/Modal";

type Props = {
  isOpen?;
  setIsOpen;
  onSubmit;
  register;
  handleSubmit;
  reset;
};

const TodoModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onSubmit,
  register,
  handleSubmit,
  reset,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex justify-end">
        <span
          className="
          font-medium
          cursor-pointer 
          inline-block 
          bg-gray-200 
          w-[24px] text-center rounded"
          onClick={() => setIsOpen(false)}
        >
          X
        </span>
      </div>

      <div className="py-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">新增待辦</h2>
        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-[8px] w-[340px]">
              <label className="block ">
                <span className="text-gray-700">標題</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  {...register("title", { required: true })}
                />
              </label>

              <label className="block">
                <span className="text-gray-700">時間</span>
                <input
                  type="date"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  {...register("time")}
                  value="2018-07-22"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">詳情描述</span>
                <textarea
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  rows={3}
                  {...register("info")}
                />
              </label>
              <label className="flex justify-center items-center">
                <input
                  type="submit"
                  className="
                    mt-1
                    block
                    w-full py-[4px]
                    cursor-pointer
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TodoModal;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, RootState } from "./index.d";

const initialState: TodoState = {
  list: [
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
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<[]>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const selectList = (state: RootState) => state.todoSlice.list;
export default todoSlice.reducer;

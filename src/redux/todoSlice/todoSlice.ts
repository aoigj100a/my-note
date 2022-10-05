import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, RootState } from "./index.d";

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //     openModal: (state: ModalState, action: PayloadAction) => {
    //       state.isOpen = true;
    //     },
    //     closeModal: (state: ModalState, action: PayloadAction) => {
    //       state.isOpen = false;
    //     },
  },
});

// export const { openModal, closeModal } = modalSlice.actions;
export const selectList = (state: RootState) => state.todoSlice.list;
export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ModalState, RootState } from "./index";

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalState, action: PayloadAction) => {
      state.isOpen = true;
    },
    closeModal: (state: ModalState, action: PayloadAction) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModalIsOpen = (state: RootState) => state.modalSlice.isOpen;
export default modalSlice.reducer;

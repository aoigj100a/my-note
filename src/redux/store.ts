import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice/modalSlice";
import todoSlice from "./todoSlice/todoSlice"

export const store = configureStore({
  reducer: {
    modalSlice,
    todoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

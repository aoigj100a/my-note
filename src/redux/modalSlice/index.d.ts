import { store } from "../store";

export type ModalState = {
  isOpen: boolean;
};

export type RootState = ReturnType<typeof store.getState>;

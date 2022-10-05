import { store } from "../store";

export type TodoState = {
  list: array;
};

export type RootState = ReturnType<typeof store.getState>;

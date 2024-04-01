import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalDialogSlice {
  open: boolean;
  type: GlobalDialogTypes;
  background: boolean;
  data: any;
  closeFunction: any;
  element: React.ReactNode;
}

export enum GlobalDialogTypes {
  error = "ERROR",
}

const initialState: IGlobalDialogSlice = {
  open: false,
  type: GlobalDialogTypes.error,
  background: true,
  data: {},
  element: null,
  closeFunction: null,
};

const GlobalDialogSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    openDialog(
      state: IGlobalDialogSlice,
      {
        payload: { element, background = true, closeFunction = null },
      }: {
        payload: {
          element: React.ReactNode;
          background: boolean;
          closeFunction: any;
        };
      }
    ) {
      state.background = background;
      state.open = true;
      state.closeFunction = closeFunction;
      state.element = element;
    },
    closeDialog(state: IGlobalDialogSlice) {
      state.open = false;
      if (!!state.closeFunction) {
        state.closeFunction({});
        state.closeFunction = null;
      }
    },
  },
});

export const { openDialog, closeDialog } = GlobalDialogSlice.actions;

export default GlobalDialogSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface GroupState {
  group_id: string | null;
  group_url: string | null;
  loading: boolean;
}

const initialState: GroupState = {
  group_id: null,
  group_url: null,
  loading: false,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    // POST /group
    // * request POST /group
    // * response POST /group
    // * error POST /group
    requestPostGroup: (state) => {
      state.loading = true;
    },
    responsePostGroup: (
      state,
      action: PayloadAction<{ group_id: string; group_url: string }>
    ) => {
      state.group_id = action.payload.group_id;
      state.group_url = action.payload.group_url;
      state.loading = false;
    },
    errorPostGroup: (state) => {
      state.loading = false;
    },
  },
});

export default groupSlice.reducer;

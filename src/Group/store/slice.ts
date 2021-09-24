import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GroupState {
  group_id: string | null;
  group_url: string | null;
  group_name: string | null;
  loading: boolean;
}

const initialState: GroupState = {
  group_id: null,
  group_url: null,
  group_name: null,
  loading: false,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    updateGroupName: (state, action: PayloadAction<string>) => {
      state.group_name = action.payload;
    },
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

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectGroupState = (state: RootState) => state.group;

export const selectGroupId = createSelector(
  selectGroupState,
  (state) => state.group_id
);

export const selectGroupUrl = createSelector(
  selectGroupState,
  (state) => state.group_url
);

export const selectGroupLoading = createSelector(
  selectGroupState,
  (state) => state.loading
);

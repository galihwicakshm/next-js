import { configureStore } from "@reduxjs/toolkit";
import darkmode from "./reducers/darkmode";

export const store = configureStore({
  reducer: {
    darkmode,
  },
});

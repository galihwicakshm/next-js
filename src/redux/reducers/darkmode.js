import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  darkSwitch: false,
};

const slice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    },
    setDarkSwitch: (state, action) => {
      return {
        ...state,
        darkSwitch: action.payload,
      };
    },
  },
});

export const { setDarkMode, setDarkSwitch } = slice.actions;

export default slice.reducer;

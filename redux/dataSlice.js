// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { monstername: "Silent Hill", clickedmonster: false },
  reducers: {
    monsterName: (state, action) => {
      state.monstername = action.payload;
    },
    clickedMonster: (state, action) => {
      state.clickedmonster = action.payload;
    },
  },
});

export const { monsterName, clickedMonster } = dataSlice.actions;
export default dataSlice.reducer;

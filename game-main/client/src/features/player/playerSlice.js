import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      name: "kpop",
      role: "TOP",
      team: "TGS",
      price: 10,
    },
    {
      name: "Faker",
      role: "MID",
      team: "T1",
      price: 7,
    },
    {
      name: "ZLATAN",
      role: "TOP",
      team: "TGS",
      price: 5,
    },
    {
      name: "TAZZA HOOK",
      role: "JUNGLE",
      team: "T1",
      price: 7,
    },
    {
      name: "JA7MAYRI",
      role: "SUPPORT",
      team: "TGS",
      price: 2,
    },
    {
      name: "Yong tutu",
      role: "SUPPORT",
      team: "Pushi top",
      price: 5,
    },
    {
      name: "Kinhart",
      role: "SUPPORT",
      team: "Pushi top",
      price: 8,
    },
    {
      name: "lekbel",
      role: "ADC",
      team: "S7AB L HADDA",
      price: 7,
    },
    {
      name: "KING OF OUT",
      role: "MID",
      team: "S7AB L HADDA",
      price: 15,
    },
  ],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
});

export const {} = playerSlice.actions;
export default playerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 1,
// };

// export const counterSlice = createSlice({
//   name: "itemCount",
//   initialState,
//   reducers: {
//     increment: (state) => {

//       state.value += 1;

//     },
//     decrement: (state) => {
//       if (state.value > 1) {
//         state.value -= 1;
//       }

//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const {
//   increment,
//   decrement,
//   incrementByAmount
// } = counterSlice.actions;

// export default counterSlice.reducer;

export interface CounterState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.totalQuantity -= action.payload.quantity;
    },
    clearCart: (state) => {
      state.totalQuantity = 0;

    },
  },
});

export const cartActions = counterSlice.actions;

export default counterSlice.reducer;

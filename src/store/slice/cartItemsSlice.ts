import { Image as Iimage } from "sanity";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  title: string;
  image: Iimage;
  price: number | string;
  category: string;
  quantity: number;
  product_id: string;
  size: string;
}

const initialState: Product[] = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const quantity = newItem.quantity;
      const price = +newItem.price; // Convert price to a number

      const existingItemIndex = state.findIndex(
        (item) =>
          item.product_id === newItem.product_id && item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update the quantity and adjust the price
        const updatedState = [...state];
        const existingItem = updatedState[existingItemIndex];
        existingItem.quantity += quantity;
        existingItem.price = +existingItem.price + price * quantity;
        return updatedState;
      } else {
        // If item doesn't exist, create a new item with the adjusted price
        const newItemWithAdjustedPrice = {
          ...newItem,
          quantity: quantity,
          price: price * quantity,
        };
        return [...state, newItemWithAdjustedPrice];
      }
    },

    removeItemFromCart: (state, action) => {
      const { productId, size } = action.payload;
      return state.filter(
        (item) => !(item.product_id === productId && item.size === size)
      );
    },
    incrementFromCart: (state, action) => {
      const { product_id, size } = action.payload;

      const updatedState = state.map((item) => {
        if (item.product_id === product_id && item.size === size) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: (+item.price / item.quantity) * (item.quantity + 1),
          };
        }
        return item;
      });

      return updatedState;
    },
    decrementFromCart: (state, action) => {
      const { product_id, size } = action.payload;

      const updatedState = state.map((item) => {
        if (item.product_id === product_id && item.size === size) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: (+item.price / item.quantity) * (item.quantity - 1),
            };
          }
        }
        return item;
      });

      return updatedState;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementFromCart,
  decrementFromCart,
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;

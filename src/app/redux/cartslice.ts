"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string; // The ID is a string.
  title: string;
  imageUrl: string | null;
  price: number;
  description: string;
  tags: string[];
  dicountPercentage?: number;
  availableSizes?: string[];
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    // Add an item to the cart.
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
    // Remove an item from the cart based on its string ID.
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

// Export actions and reducer.
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

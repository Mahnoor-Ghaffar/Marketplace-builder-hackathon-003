// "use client";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   _id: string; // The ID is a string.
//   title: string;
//   imageUrl: string | null;
//   price: number;
//   description: string;
//   tags: string[];
//   dicountPercentage?: number;
//   availableSizes?: string[];
// }

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [] as CartItem[],
//   reducers: {
//     // Add an item to the cart.
//     add(state, action: PayloadAction<CartItem>) {
//       state.push(action.payload);
//     },
//     // Remove an item from the cart based on its string ID.
//     remove(state, action: PayloadAction<string>) {
//       return state.filter((item) => item._id !== action.payload);
//     },
//   },
// });

// // Export actions and reducer.
// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;



"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  title: string;
  imageUrl: string | null;
  price: number;
  description: string;
  tags: string[];
  dicountPercentage?: number;
  availableSizes?: string[];
  quantity: number; 
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item._id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((item) => item._id !== action.payload);
      }
    },
    clearCart() {
      return [];
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

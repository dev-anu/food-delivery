import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as any,
  },
  reducers: {
    getItem: (state: any) => {
      return state?.items;
    },
    addItem: (state: any, action: any) => {
      if (state?.items.length === 0) {
        state.items = [action?.payload];
      } else {
        state.items.push(action.payload); // Use push directly for arrays
      }
    },
    removeItem: (state: any, action: any) => {
      // Remove item from the cart based on its ID
      const updatedItems = state?.items.filter(
        (data: any) => data?.id !== action?.payload,
      );

      // Update the existing array
      state.items.length = 0; // Clear the array
      Array.prototype.push.apply(state.items, updatedItems); // Add updated items
    },
  },
});

export const {addItem, removeItem, getItem} = cartSlice.actions;

export default cartSlice.reducer;

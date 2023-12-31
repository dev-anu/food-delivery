// store/index.js
import {configureStore} from '@reduxjs/toolkit';
import Cart from './slices/Cart';

const store = configureStore({
  reducer: {
    Cart: Cart,
  },
});

export default store;

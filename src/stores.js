import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
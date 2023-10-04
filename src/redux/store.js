import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from "@reduxjs/toolkit";
import rocketReducer from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    Rockets: rocketReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;

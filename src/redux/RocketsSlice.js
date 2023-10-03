import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: '',

};
const RocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase();
  },
});

export default RocketsSlice;

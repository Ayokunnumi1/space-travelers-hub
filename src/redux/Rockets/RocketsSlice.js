import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';
export const getDataFromServer = createAsyncThunk('Rockets/getDataFromServer', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  rocketData: [],
  loading: false,
  error: '',

};
const RocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataFromServer.fulfilled, (state, action) => {
        state.loading = false;
        state.rocketData = action.payload.map((rocket) => (
          {
            id: rocket.id,
            image: rocket.flickr_images[0],
            name: rocket.name,
            description: rocket.description,
            type: rocket.type,
          }

        ));
      })
      .addCase(getDataFromServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default RocketsSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const REDUCER_DOMAIN = 'common';

export const commonSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = commonSlice.actions;

export default commonSlice.reducer;

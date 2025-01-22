import {createSlice} from '@reduxjs/toolkit';
import * as countriesService from '@/api/services/countries-service';
import {AppDispatch} from '../store';
import {setLoading as setCommonLoading} from './common-slice';

const REDUCER_DOMAIN = 'countries';

export const countriesSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const FetchCountries = () => async (dispatch: AppDispatch) => {
  dispatch(setCommonLoading(true));
  dispatch(setLoading(true));
  try {
    const response = await countriesService.getCountries();

    if (response.status === 200 && response.data) {
      dispatch(setLoading(false));
      dispatch(setCommonLoading(false));

      dispatch(setData(response.data));
    } else throw new Error('Something Went Wrong!');
  } catch (error) {
    console.error(error)
    // dispatch(setError(error));
    dispatch(setLoading(false));
    dispatch(setCommonLoading(false));
  }
};

export const {setData, setLoading, setError} = countriesSlice.actions;

export default countriesSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import * as authService from '@/api/services/auth-service';
import {AppDispatch} from '../store';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const REDUCER_DOMAIN = 'auth';

export const authSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const SignIn = (username: string, password: string, router: AppRouterInstance) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await authService.signIn({username, password});

    if (response.status !== 200) throw new Error('Invalid credentials');

    dispatch(setIsLoggedIn(true));
    dispatch(setLoading(false));
    router.push('/dashboard');
  } catch (error) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};

export const {setIsLoggedIn, setLoading, setError} = authSlice.actions;

export default authSlice.reducer;

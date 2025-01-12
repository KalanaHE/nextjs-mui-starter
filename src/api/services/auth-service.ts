import {SignInPayload} from '@/interface/auth';
import apiClient from '../api-client';

export const signIn = async (data: SignInPayload) => {
  try {
    return Promise.resolve(await apiClient.post('https://dummyjson.com/auth/login', data));
  } catch (error) {
    return Promise.reject(error);
  }
};

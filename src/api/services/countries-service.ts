import apiClient from '../api-client';

export const getCountries = async () => {
  try {
    return Promise.resolve(await apiClient.get('https://restcountries.com/v3.1/all'));
  } catch (error) {
    return Promise.reject(error);
  }
};

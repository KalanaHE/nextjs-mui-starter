'use client';

import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import {Button} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {FetchCountries} from '@/redux/reducers/countries-slice';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Home</h1>
      <ToggleDarkTheme />
      <Button onClick={() => dispatch(FetchCountries())} variant="contained" color="primary">
        Fetch Countries
      </Button>
    </div>
  );
};

export default Page;

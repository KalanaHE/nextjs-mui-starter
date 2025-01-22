'use client';

import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import {SignOut} from '@/redux/reducers/auth-slice';
import {Button} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {useRouter} from 'next/navigation';
import {FetchCountries} from '@/redux/reducers/countries-slice';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <ToggleDarkTheme />
      <Button onClick={() => dispatch(SignOut(router))} variant="contained" color="primary">
        Sign Out
      </Button>

      <Button onClick={() => dispatch(FetchCountries())} variant="contained" color="primary">
        Fetch Countries
      </Button>
    </div>
  );
};

export default Page;

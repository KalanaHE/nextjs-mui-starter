'use client';

import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import {SignOut} from '@/redux/reducers/auth-slice';
import {Button} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {useRouter} from 'next/navigation';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  return (
    <div>
      Home
      <ToggleDarkTheme />
      <Button onClick={() => dispatch(SignOut(router))} variant="contained" color="primary">
        signout
      </Button>
    </div>
  );
};

export default Page;

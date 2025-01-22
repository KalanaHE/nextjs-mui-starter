'use client';

import React, {useState} from 'react';
import {Box, Container, CssBaseline, TextField, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {SignIn} from '@/redux/reducers/auth-slice';
import {useRouter} from 'next/navigation';
import {selectLoading} from '@/redux/selectors/auth-selector';
import {LoadingButton} from '@mui/lab';

const Page = () => {
  const router = useRouter();
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{mt: 1}}>
          <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <LoadingButton
            loading={isLoading}
            disabled={isLoading}
            onClick={() => dispatch(SignIn(username, password, router))}
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}>
            Sign In
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;

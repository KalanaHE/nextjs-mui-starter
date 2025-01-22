'use client';

import PageWrapper from '@/components/page-wrapper/PageWrapper';
import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import {Button, Container, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();

  return (
    <Container maxWidth="lg">
      <PageWrapper>
        <Typography variant="h4" component="h1" sx={{mb: 2}}>
          This is the landing page
        </Typography>
        <ToggleDarkTheme />
        <Button onClick={() => router.push('/dashboard')} variant="contained" color="primary">
          Go to the dashboard
        </Button>
      </PageWrapper>
    </Container>
  );
};

export default Page;

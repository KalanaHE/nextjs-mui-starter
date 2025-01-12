'use client';

import PageWrapper from '@/components/page-wrapper/PageWrapper';
import ToggleDarkTheme from '@/components/toggle-dark-theme/ToggleDarkTheme';
import {Container, Typography} from '@mui/material';
import React from 'react';

const Page = () => {
  return (
    <Container maxWidth="lg">
      <PageWrapper>
        <Typography variant="h4" component="h1" sx={{mb: 2}}>
          This is the landing page
        </Typography>
        <ToggleDarkTheme />
      </PageWrapper>
    </Container>
  );
};

export default Page;

import PersistProvider from '@/redux/PersistProvider';
import ReduxProvider from '@/redux/ReduxProvider';
import theme from '@/theme/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {ThemeProvider} from '@mui/material';
import React, {ReactNode} from 'react';

export const metadata = {
  title: 'My App',
  description: 'My app description',
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ReduxProvider>
          <PersistProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PersistProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;

'use client';

import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './store';

import {ReactNode} from 'react';

const PersistProvider = ({children}: {children: ReactNode}) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default PersistProvider;

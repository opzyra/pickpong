import React from 'react';
import { ThemeProvider } from 'styled-components';
import media from './utils/media';

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      ...media,
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;

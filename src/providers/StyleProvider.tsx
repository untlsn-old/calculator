import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@style';
import { OnlyChildren } from '~/type';

const StyleProvider = ({ children }: OnlyChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;

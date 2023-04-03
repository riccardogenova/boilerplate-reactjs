/** @format */

import { memo, ReactNode } from 'react';

import { ThemeProvider as EmotionProvider, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { theme as themeSelector } from './mapColors';

const StyledTheme = styled.div(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.background,
  color: theme.text,
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  fontFamily: 'Arial, Helvetica, sans-serif',
}));

interface Props {
  themeSelected: 'light' | 'dark';
  children: ReactNode;
}

export const ThemeProvider = memo(({ children, themeSelected }: Props) => {
  const { dark, light } = themeSelector;

  return (
    <EmotionProvider theme={themeSelected === 'light' ? light : dark}>
      <StyledTheme>{children}</StyledTheme>
    </EmotionProvider>
  );
});

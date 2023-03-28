/** @format */

import { memo, ReactNode } from 'react';

import { ThemeProvider as EmotionProvider } from '@emotion/react';

import { theme } from './index';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = memo(({ children }: Props) => {
  const { dark } = theme;

  return <EmotionProvider theme={dark}>{children}</EmotionProvider>;
});

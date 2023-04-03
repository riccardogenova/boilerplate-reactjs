/** @format */

import { Dispatch, SetStateAction, memo } from 'react';

import styled from '@emotion/styled';
import DarkModeToggle from 'react-dark-mode-toggle';

// #region ::: STYLED
const Toggle = styled(DarkModeToggle)({
  position: 'absolute',
  zIndex: '1',
  right: '10px',
  top: '12px',
});
// #endregion

interface Props {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export const SwitchTheme = memo(({ theme, setTheme }: Props) => {
  const onChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');

    localStorage.setItem('reactJS-boilerplate-theme', JSON.stringify(theme === 'light' ? 'dark' : 'light'));
  };

  return <Toggle onChange={onChange} checked={theme === 'dark'} size={50} />;
});

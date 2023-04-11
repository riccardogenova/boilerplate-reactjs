/** @format */

import { Dispatch, SetStateAction, memo } from 'react';

import styled from '@emotion/styled';

// #region ::: STYLED

const CheckBoxWrapper = styled.div({
  position: 'absolute',
  zIndex: '1',
  right: '10px',
  top: '12px',
});

const CheckBoxLabel = styled.label({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '38px',
  height: '22px',
  borderRadius: '15px',
  background: '#4d4e4f',
  cursor: 'pointer',

  '&:after': {
    content: '""',
    display: 'block',
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    margin: '3px',
    background: '#ffffff',
    transition: '0.2s',
  },
});

const CheckBox = styled.input({
  opacity: 0,
  zIndex: 1,
  borderRadius: '15px',
  width: '38px',
  height: '22px',
  '&:checked + label': {
    background: '#3583bf',
    '&::after': {
      content: '""',
      display: 'block',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      marginLeft: '19px',
      transition: '0.2s',
    },
  },
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

  return (
    <CheckBoxWrapper onChange={onChange}>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
});

/** @format */

import { memo } from 'react';

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { theme as themeSelector } from '../../theme/mapColors';
import { utilityGetTheme } from '../../utils/utilityGetTheme';

// #region ::: STYLED

const StyledButton = styled.button(({ disabled, theme }: { disabled: boolean; theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  height: '32px',
  background: disabled ? 'grey' : '#61DAFB',
  border: 'none',
  boxShadow: disabled ? 'none' : `1px 2px 0px #7de0fb`,
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: disabled ? 'black' : theme.buttonText,
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '-1px',
  borderWidth: '1px',
  fontSize: '1rem',
  '&:active': {
    outline: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    opacity: disabled ? 1 : 0.5,
    background: disabled ? 'grey' : ' #7de0fb',
  },
}));

// #endregion

export interface Props {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const UIButton = memo(
  ({ disabled = false, onClick, label = 'abilitato', onMouseEnter, onMouseLeave }: Props) => {
    const storageTheme = utilityGetTheme() || 'dark';
    const { dark, light } = themeSelector;

    return (
      <div>
        <StyledButton
          theme={storageTheme === 'light' ? light : dark}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {label}
        </StyledButton>
      </div>
    );
  },
);

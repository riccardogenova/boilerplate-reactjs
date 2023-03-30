/** @format */

import { memo } from 'react';

import styled from '@emotion/styled';

// #region ::: STYLED

const StyledButton = styled.button(({ disabled }: { disabled: boolean }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  height: '32px',
  background: disabled ? 'grey' : 'blue',
  border: 'none',
  boxShadow: disabled ? 'none' : `1px 2px 0px blue`,
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: disabled ? 'black' : 'white',
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
    background: disabled ? 'grey' : '#4e57efcf',
  },
}));

// #endregion

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const UIButton = memo(({ disabled = false, onClick, label, onMouseEnter, onMouseLeave }: Props) => (
  <div>
    <StyledButton disabled={disabled} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {label}
    </StyledButton>
  </div>
));

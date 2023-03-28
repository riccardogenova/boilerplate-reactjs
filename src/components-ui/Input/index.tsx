/** @format */

import { ChangeEvent, memo } from 'react';

import styled from '@emotion/styled';

// #region ::: STYLED
const StyledContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledInputLabel = styled.label({
  color: 'black',
  textTransform: 'capitalize',
  fontSize: '13px',
});

const StyledInput = styled.input(({ disabled }: { disabled?: boolean }) => ({
  background: disabled ? 'grey' : '#30384c',
  borderRadius: 8,
  padding: 10,
  textOverflow: 'ellipsis',
  fontWeight: '300',
  color: disabled ? '#ffffff36' : 'white',
  fontSize: 16,
  height: 16,
  outline: 'none',
  '::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
  cursor: disabled ? 'not-allowed' : 'initial',
  border: '3px solid transparent',
  ':focus': {
    borderColor: '#4e57efcf',
  },
}));
// #endregion

interface Props {
  disabled?: boolean;
  isRequired?: boolean;
  label?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
  value?: string | number | null;
}

export const UIInput = memo(
  ({ onChange, onClick, maxLength, value, isRequired, disabled, label, placeholder }: Props) => {
    const formattedLabel = isRequired ? `${label ? `${label}*` : ''}` : label;
    const formattedValue = value === null ? '' : value;

    return (
      <StyledContainer>
        {!!formattedLabel && (
          <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
            {formattedLabel && <StyledInputLabel>{formattedLabel}</StyledInputLabel>}
          </div>
        )}
        <StyledInput
          placeholder={placeholder}
          onChange={onChange}
          value={formattedValue}
          disabled={disabled}
          maxLength={maxLength}
          onClick={onClick}
        />
      </StyledContainer>
    );
  },
);

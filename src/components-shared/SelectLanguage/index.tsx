/** @format */

import { useEffect, useState } from 'react';

import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorLocale } from '../../redux/locale/selectors';
import { sliceLocale } from '../../redux/locale/slice';
import { TLocale } from '../../utils/getDefaultLocale';

// #region ::: STYLED
const StyledButtonLanguage = styled.button(
  ({ isLocaleSelected, theme }: { isLocaleSelected: boolean; theme: Theme }) => ({
    backgroundColor: 'transparent',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    border: 'none',
    width: '16px',
    color: theme.text,
    opacity: isLocaleSelected ? 1 : 0.5,
    '&:hover': {
      opacity: isLocaleSelected ? 1 : 0.8,
    },
  }),
);

const StyledSelectedLanguage = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  padding: '0 15px 15px 0',
});

// #endregion

const utilitySaveToLocalStorage = (ref: string, data: string): void => {
  if (typeof window === 'object') localStorage.setItem(ref, JSON.stringify(data));
};

export const SelectLanguage = () => {
  const locale = useAppSelector(selectorLocale);
  const dispatch = useAppDispatch();
  const [isLocaleIT, setIsLocaleIT] = useState(false);
  const theme = useTheme();

  const onChangeLocale = (localeSelected: TLocale) => {
    dispatch(sliceLocale.actions.setLocale(localeSelected));
    utilitySaveToLocalStorage('locale', localeSelected);
  };

  useEffect(() => {
    setIsLocaleIT(locale === 'it');
  }, [locale]);

  return (
    <StyledSelectedLanguage>
      <StyledButtonLanguage
        theme={theme}
        isLocaleSelected={isLocaleIT}
        onClick={() => {
          onChangeLocale('it');
        }}
      >
        it
      </StyledButtonLanguage>
      <span style={{ color: '#a0b3d7', margin: '0 8px' }}>|</span>
      <StyledButtonLanguage
        theme={theme}
        isLocaleSelected={!isLocaleIT}
        onClick={() => {
          onChangeLocale('en');
        }}
      >
        en
      </StyledButtonLanguage>
    </StyledSelectedLanguage>
  );
};

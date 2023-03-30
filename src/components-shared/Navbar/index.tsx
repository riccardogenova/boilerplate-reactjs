/** @format */

import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAppTranslation } from '../../i18n/hooks';

// #region ::: STYLED
const StyledNav = styled.nav({
  backgroundColor: '#333',
  color: '#fff',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
});

const StyledUl = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
});

const StyledLi = styled.li({
  margin: '0 10px',
});

const StyledLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
});
// #endregion

export const Navbar = () => {
  const { t } = useAppTranslation();
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Homepage</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about">{t('about')}</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

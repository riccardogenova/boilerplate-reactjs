/** @format */

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { useAppTranslation } from '../../i18n/hooks';
import { selectorAuth } from '../../redux/auth/selectors';
import { useAppSelector } from '../../redux/hooks';

// #region ::: STYLED
const StyledNav = styled.nav(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.navBar,
  color: theme.text,
  height: '50px',
  display: 'flex',
  alignItems: 'center',
}));

const StyledUl = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
});

const StyledLi = styled.li({
  margin: '0 10px',
});

const StyledLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme.text,
  textDecoration: 'none',
}));
// #endregion

export const Navbar = () => {
  const { isAuthenticated } = useAppSelector(selectorAuth);
  const { t } = useAppTranslation();

  if (!isAuthenticated) return null;

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

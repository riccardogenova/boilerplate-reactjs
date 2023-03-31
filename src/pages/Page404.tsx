/** @format */

import { memo } from 'react';

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { UIButton } from '../components-ui/Button';
import { useAppTranslation } from '../i18n/hooks';

const StyledContainer = styled.div(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.background,
  color: theme.text,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
}));

export const Page404 = memo(() => {
  const goBackHistory = () => window.history.back();
  const { t } = useAppTranslation();

  return (
    <StyledContainer>
      <h1>{t('404-not-found')}</h1>
      <p>{t('not-found-content')}</p>
      <UIButton onClick={goBackHistory} label={t('go-back')} />
    </StyledContainer>
  );
});

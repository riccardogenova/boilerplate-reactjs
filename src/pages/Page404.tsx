/** @format */

import { memo } from 'react';

import { UIButton } from '../components-ui/Button';
import { useAppTranslation } from '../i18n/hooks';

export const Page404 = memo(() => {
  const goBackHistory = () => window.history.back();
  const { t } = useAppTranslation();

  return (
    <div>
      <h1 style={{ color: 'white' }}>{t('404-not-found')}</h1>
      <p style={{ color: 'white' }}>{t('not-found-content')}</p>
      <UIButton onClick={goBackHistory} label={t('go-back')} />
    </div>
  );
});

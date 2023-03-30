/** @format */

import logo from '../../assets/icons/logo.svg';
import { useAppTranslation } from '../../i18n/hooks';

export const Home = () => {
  const { t } = useAppTranslation();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t('example')}
      </a>
    </header>
  );
};

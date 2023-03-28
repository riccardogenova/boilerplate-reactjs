/** @format */
import React from 'react';

import './App.css';
import { useAppTranslation } from './i18n/hooks';
import logo from './logo.svg';
import { ThemeProvider } from './theme/Provider';

function App() {
  const { t } = useAppTranslation();

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            {t('example')}
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

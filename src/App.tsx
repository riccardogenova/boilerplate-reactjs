/** @format */
import React from 'react';

import { useAppTranslation } from './i18n/hooks';
import logo from './logo.svg';

import './App.css';

function App() {
  const { t } = useAppTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Edit <code>src/App.tsx</code> and save to reload.
        </h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('example')}
        </a>
      </header>
    </div>
  );
}

export default App;

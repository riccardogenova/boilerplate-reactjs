/** @format */
import { useEffect, useState } from 'react';

import { Global, css } from '@emotion/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components-shared/Navbar';
import { SelectLanguage } from './components-shared/SelectLanguage';
import { SwitchTheme } from './components-shared/SwitchTheme';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Page404 } from './pages/Page404';
import { store } from './redux/createStore';
import { ThemeProvider } from './theme/Provider';
import { utilityGetTheme } from './utils/utilityGetTheme';

// #region ::: STYLED
const globalStyles = css`
  body {
    background-color: #282c34;

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
// #end-region

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storageTheme = utilityGetTheme() || 'dark';
    setTheme(storageTheme);
  }, []);

  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <ThemeProvider themeSelected={theme}>
        <BrowserRouter>
          <Navbar />
          <SwitchTheme theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <SelectLanguage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

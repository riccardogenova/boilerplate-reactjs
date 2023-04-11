/** @format */
import { useEffect, useState } from 'react';

import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components-shared/Navbar';
import { SelectLanguage } from './components-shared/SelectLanguage';
import { SwitchTheme } from './components-shared/SwitchTheme';
import { Page404 } from './pages/404';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { selectorAuth } from './redux/auth/selectors';
import { useAppSelector } from './redux/hooks';
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
  const { isAuthenticated, isLoading } = useAppSelector(selectorAuth);

  useEffect(() => {
    const storageTheme = utilityGetTheme() || 'dark';
    setTheme(storageTheme);
  }, []);

  return (
    <ThemeProvider themeSelected={theme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Navbar />
        <SwitchTheme theme={theme} setTheme={setTheme} />
        <Routes>
          {isAuthenticated || isLoading ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <SelectLanguage />
    </ThemeProvider>
  );
}

export default App;

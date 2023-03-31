/** @format */
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Navbar } from './components-shared/Navbar';
import { SwitchTheme } from './components-shared/SwitchTheme';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Page404 } from './pages/Page404';
import { store } from './redux/createStore';
import { ThemeProvider } from './theme/Provider';
import { utilityGetTheme } from './utils/utilityGetTheme';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storageTheme = utilityGetTheme() || 'dark';
    setTheme(storageTheme);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider themeSelected={theme}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <SwitchTheme theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

/** @format */

import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Navbar } from './components-shared/Navbar';
import { About } from './pages/about';
import { Home } from './pages/home';
import { store } from './redux/createStore';
import { ThemeProvider } from './theme/Provider';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

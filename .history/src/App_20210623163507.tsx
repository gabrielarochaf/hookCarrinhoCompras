import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components'
import red from './styles/themes/red'
import green from './styles/themes/green'

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';



const App = (): JSX.Element => {
  const [theme, setTheme] = useState(red);

  const toggleTheme = () => {
    setTheme(theme.title === 'red' ? green : red)
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme} />
          <Routes />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

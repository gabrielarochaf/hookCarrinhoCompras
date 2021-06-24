import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components'
import red from './styles/themes/red'

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={red}>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

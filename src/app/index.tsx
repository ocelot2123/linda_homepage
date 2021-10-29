/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import { Routes } from './routes/AppRoutes';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../styles/themes/default/theme';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="INFTE"
        defaultTitle="INFTE"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="INFTE" />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Routes />
        </SnackbarProvider>
      </MuiThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

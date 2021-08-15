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
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import { useStore } from 'react-redux';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../styles/themes/default/theme';

export function App() {
  const { i18n } = useTranslation();
  const store = useStore();
  const httpLink = createUploadLink({ uri: process.env.REACT_APP_API_URI });
  const authLink = setContext((_, { headers }) => {
    const token = store.getState().user.token;
    return token
      ? {
          headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : '',
          },
        }
      : {
          headers: {
            ...headers,
          },
        };
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  });
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Routes />
          </SnackbarProvider>
        </MuiThemeProvider>
      </ApolloProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

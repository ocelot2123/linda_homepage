import jwtDecode from 'jwt-decode';
import { useSnackbar } from 'notistack';
/**
 *
 * PrivateRoute
 *
 */
import * as React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';

import {
  meQuery,
  refreshTokenMutation,
  verifyTokenMutation,
} from '../../queries';
import { loginUrl } from '../../routes/paths';
import { useUserSlice } from '../../slice';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = useStore();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const state = store.getState();
  const { actions: userActions } = useUserSlice();

  const [refresh] = useMutation(refreshTokenMutation, {
    variables: { refreshToken: (state && state.user.refreshToken) || '' },
    fetchPolicy: 'no-cache',
  });

  const { refetch } = useQuery(meQuery, { fetchPolicy: 'no-cache' });

  const logoff = () => {
    dispatch(userActions.logout());
    enqueueSnackbar('Your session has expired. Please Sign In.', {
      variant: 'warning',
      autoHideDuration: 3000,
    });
    history.push(loginUrl);
  };

  const token = state && state.user.token;
  const { username, exp } = (token &&
    jwtDecode<{ username: string; exp: number; origIat: number }>(token)) || {
    username: null,
    exp: null,
  };

  React.useEffect(() => {
    if (state) {
      // Verify that user still exists
      refetch().then(x => {
        if (!x.loading && !x.data.me) {
          logoff();
        }
      });

      // Attempt to refresh user's token
      if (exp < Math.floor(Date.now() / 1000)) {
        refresh()
          .then(x =>
            dispatch(
              userActions.authenticate({
                token: x.data.tokenAuth.token,
                refreshToken: x.data.tokenAuth.refreshToken,
                username: username,
              }),
            ),
          )
          .catch(() => logoff());
      }
    } else {
      logoff();
    }
  }, [location]);

  return <Route {...rest} render={props => <Component {...props} />} />;
};

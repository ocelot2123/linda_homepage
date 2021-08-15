import { useMutation } from '@apollo/client';
import * as React from 'react';
import { LoginView } from './View';
import { tokenAuthMutation } from '../../queries';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useUserSlice } from '../../slice';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../../routes/paths';

export function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { actions: userActions } = useUserSlice();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [authenticated, setAuthenticated] = React.useState(false);

  const setUsernameState = v => setUsername(v);
  const setPasswordState = v => setPassword(v);
  const setRememberState = v => setRemember(v);

  const [token_auth] = useMutation(tokenAuthMutation, {
    fetchPolicy: 'no-cache',
  });

  React.useEffect(() => {
    if (authenticated) {
      history.push(baseUrl);
    }
  });

  const login = (username, password) =>
    token_auth({ variables: { username, password }, fetchPolicy: 'no-cache' })
      .then(x => {
        dispatch(
          userActions.authenticate({
            token: x.data.tokenAuth.token,
            refreshToken: x.data.tokenAuth.refreshToken,
            username: username,
          }),
        );
        setAuthenticated(true);
      })
      .catch(error => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });

  const submit = () => {
    login(username, password);
  };

  return (
    <>
      <LoginView
        username={username}
        setUsername={setUsernameState}
        password={password}
        setPassword={setPasswordState}
        remember={remember}
        setRemember={setRememberState}
        submit={submit}
      />
    </>
  );
}

import { useSnackbar } from 'notistack';
/**
 *
 * SignupPage
 *
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import { registerAccountMutation } from '../../queries';
import { baseUrl } from '../../routes/paths';
import { useUserSlice } from '../../slice';
import { SignupView } from './View';

export function SignupPage() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions: userActions } = useUserSlice();
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [authenticated, setAuthenticated] = React.useState(false);

  const setUsernameState = v => setEmail(v);
  const setPasswordState = v => setPassword(v);
  const setFirstNameState = v => setFirstName(v);
  const setLastNameState = v => setLastName(v);
  const setConfirmPasswordState = v => setConfirmPassword(v);

  const [registerMutation] = useMutation(registerAccountMutation, {
    fetchPolicy: 'no-cache',
  });

  React.useEffect(() => {
    if (authenticated) {
      history.push(baseUrl);
    }
  });

  const register = (
    email,
    password1,
    password2,
    username,
    firstName,
    lastName,
  ) =>
    registerMutation({
      variables: { email, password1, password2, username, firstName, lastName },
      fetchPolicy: 'no-cache',
    })
      .then(x => {
        dispatch(
          userActions.authenticate({
            token: x.data.register.token,
            refreshToken: x.data.register.refreshToken,
            username: username,
          }),
        );
        setAuthenticated(true);
      })
      .catch(error => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });

  const submit = () => {
    register(email, password, confirmPassword, email, firstName, lastName);
  };

  return (
    <>
      <SignupView
        username={email}
        setUsername={setUsernameState}
        firstName={firstName}
        setFirstName={setFirstNameState}
        lastName={lastName}
        setLastName={setLastNameState}
        password={password}
        setPassword={setPasswordState}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPasswordState}
        submit={submit}
      />
    </>
  );
}

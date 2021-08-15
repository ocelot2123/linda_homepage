import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useUserSlice } from '../../slice';
import { useHistory } from 'react-router-dom';
import { loginUrl } from '../../routes/paths';
import { View } from './View';

export function PeoplePage() {
  const history = useHistory();
  const { actions: userActions } = useUserSlice();
  const dispatch = useDispatch();
  const logoff = () => {
    dispatch(userActions.logout());
    history.push(loginUrl);
  };
  return <View logoff={logoff} />;
}

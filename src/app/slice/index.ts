import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';

import { PayloadAction } from '@reduxjs/toolkit';

import { UserState } from './types';

export const initialState: UserState = {
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refresh_token') || null,
  sidebarOpen: localStorage.getItem('sidebar_open') === 'true',
  loading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
        username: string;
      }>,
    ) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('refresh_token', action.payload.refreshToken);
    },
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('token');
    },
    toggleSidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
      localStorage.setItem('sidebar_open', state.sidebarOpen.toString());
    },
    setLoading(state) {
      state.loading = state.loading;
    },
  },
});

export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

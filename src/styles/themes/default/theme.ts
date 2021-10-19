import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import * as C from './colours';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary: {
      light: C.primaryLight,
      main: C.primary,
      dark: C.primaryDark,
    },
    secondary: {
      light: C.secondaryLight,
      main: C.secondary,
      dark: C.secondaryDark,
    },
  },
});

import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import * as C from './colours';

export const theme = createMuiTheme({
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

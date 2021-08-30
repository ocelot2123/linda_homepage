import clsx from 'clsx';
/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './Styles';

interface Props {
  open?: boolean;
  handleDrawerOpen?: () => void;
}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [query, setQuery] = React.useState('');
  const history = useHistory();

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: props.open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Newco logo
      </Typography>
      <Hidden smDown>
      </Hidden>
    </Toolbar>
  );
});

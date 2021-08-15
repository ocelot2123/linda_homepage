/**
 *
 * UserInfo
 *
 */
import React, { memo } from 'react';
import {
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';

interface Props {
  name: string;
  jobTitle?: string;
  email?: string;
}

const useStyles = makeStyles(theme => ({
  name: {
    height: '5rem',
  },
  divider: {
    margin: '2rem 0',
    marginRight: '40%',
  },
}));

export const UserInfo = memo((props: Props) => {
  const classes = useStyles();
  return (
    <Grid container justify={'center'} alignContent={'center'}>
      <div className={classes.name}>
        <Hidden smDown>
          <Grid className={classes.name} item xs={12} />
        </Hidden>
        <Grid item xs={12}>
          <Typography variant={'h5'}>{props.name}</Typography>
        </Grid>
        {props.jobTitle && (
          <Grid item xs={12}>
            <Typography>{props.jobTitle}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'h5'}>Contact</Typography>
        </Grid>
        {props.email && (
          <Grid item xs={12}>
            <Typography>
              <MailOutline /> {props.email}
            </Typography>
          </Grid>
        )}
      </div>
    </Grid>
  );
});

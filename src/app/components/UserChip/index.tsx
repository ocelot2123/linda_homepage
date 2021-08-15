/**
 *
 * UserChip
 *
 */
import * as React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

interface Props {
  title: string;
  user?: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    jobTitle?: string | null;
    location?: string | null;
  } | null;
  edit?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
    },
    edit: {
      cursor: 'pointer',
      color: 'blue',
      '&:hover': {
        color: 'gray',
      },
    },
  }),
);

export const UserChip = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid container direction={'row'}>
      <Grid item xs={12} sm={3}>
        <Typography>
          <span className={classes.title}>{props.title}: </span>
        </Typography>
      </Grid>
      {props.user ? (
        <Grid item xs={12} sm={9}>
          <Typography>
            {props.user.firstName} {props.user.lastName}
          </Typography>
          {props.user.jobTitle && (
            <Typography>{props.user.jobTitle}</Typography>
          )}
          <Typography paragraph>{props.user.email}</Typography>
        </Grid>
      ) : (
        <Typography paragraph>
          Not Specified
          {props.edit && (
            <span className={classes.edit} onClick={() => props.edit}>
              &nbsp;&nbsp;edit
            </span>
          )}
        </Typography>
      )}
    </Grid>
  );
};

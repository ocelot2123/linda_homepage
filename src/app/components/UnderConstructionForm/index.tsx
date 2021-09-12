/**
 *
 * SignUpForm
 *
 */
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Box,
  CardMedia,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Props } from './Props';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  header: {
    letterSpacing: '0.2em',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    width: '200px',
    height: '30.4px',
  },
}));

export const UnderConstructionForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardMedia
              className={classes.media}
              image={'/fitted.png'}
              title="Logo"
            />
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12}>
            <Typography className={classes.header} component="h1" variant="h5">
              <Box fontWeight="fontWeightMedium">{'UNDER CONSTRUCTION.'}</Box>
            </Typography>
            <br />
            <Typography component="h5" variant="body1">
              {
                'Sign up for our Newsletter to receive information around our launch.'
              }
            </Typography>
            <Typography component="h5" variant="body1">
              <strong>FITTED </strong>
              {
                'is a fashion e-commerce marketplace that focuses on fit, preventing you from buying the wrong sized garments.'
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form
              className={classes.form}
              noValidate
              action="https://shop.us20.list-manage.com/subscribe/post?u=2005da0635f5d9ff2223251c6&amp;id=3d613c37d6"
              method="post"
              target="_blank"
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="EMAIL"
                label="email"
                name="EMAIL"
                autoComplete="email"
                autoFocus
                value={props.username}
                onChange={e => props.setUsername(e.target.value)}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {t('signin_form.signup_button')}
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
});

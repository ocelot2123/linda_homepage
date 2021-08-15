/**
 *
 * SignInForm
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { forgotUrl, signupUrl } from '../../routes/paths';
import { Props } from './Props';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignInForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('signin_form.title')}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('signin_form.email_address')}
            name="email"
            autoComplete="email"
            autoFocus
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('signin_form.password')}
            type="password"
            id="password"
            autoComplete="current-password"
            value={props.password}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                props.submit();
              }
            }}
            onChange={e => props.setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t('signin_form.remember_checkbox')}
            value={props.remember}
            onChange={e => props.setRemember(!props.remember)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => props.submit()}
          >
            {t('signin_form.signin_button')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={forgotUrl} variant="body2">
                {t('signin_form.forgot_password')}
              </Link>
            </Grid>
            <Grid item>
              <Link href={signupUrl} variant="body2">
                {t('signin_form.new_account')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
});

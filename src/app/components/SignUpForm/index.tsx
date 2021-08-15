/**
 *
 * SignUpForm
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { loginUrl } from '../../routes/paths';
import { Props } from './Props';
import { PersonAdd } from '@material-ui/icons';

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

export const SignUpForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('signin_form.signup_title')}
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
            helperText={t('signin_form.email_helper')}
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label={t('signin_form.first_name')}
              name="firstname"
              value={props.firstName}
              onChange={e => props.setFirstName(e.target.value)}
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label={t('signin_form.last_name')}
              name="lastname"
              autoFocus
              value={props.lastName}
              onChange={e => props.setLastName(e.target.value)}
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
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm password"
            label={t('signin_form.confirm_password')}
            type="password"
            id="confirm-password"
            value={props.confirmPassword}
            onChange={e => props.setConfirmPassword(e.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                props.submit();
              }
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => props.submit()}
          >
            {t('signin_form.signup_button')}
          </Button>
          <Link href={loginUrl}>
            <Typography align={'center'}>
              Sign in to an existing account.
            </Typography>
          </Link>
        </form>
      </div>
    </>
  );
});

/**
 *
 * SignUpForm
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Props } from './Props';

import styled from 'styled-components';

import HeaderLogo from './logo.jpeg';

export const LogoIcon: React.FC = () => <SIcon url={HeaderLogo} />;

const SIcon = styled.div<{ url: string }>`
  min-width: 200px;
  min-height: 30px;
  ${({ url }) => {
    return `background: url(${url});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;`;
  }}}
  margin-bottom: 200px;
`;
const useStyles = makeStyles(theme => ({
  paper: {
    font: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  h6: {
    textAlign: 'center',
  },
  header: {
    letterSpacing: '0.2em',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const UnderConstructionForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <LogoIcon />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h6" variant="h6" className={classes.h6}>
              {
                'Sign up for our Newsletter to receive information about our launch.'
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form
              className={classes.form}
              noValidate
              action="https://infte.us5.list-manage.com/subscribe/post?u=80a428e5ff65fbfbaa4209b6d&amp;id=d1b7ed4a49"
              method="post"
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

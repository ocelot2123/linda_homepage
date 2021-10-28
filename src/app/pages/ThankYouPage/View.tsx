import { BasicPage } from '../../templates/BasicPage';
import { Container } from '@material-ui/core';

import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import styled from 'styled-components';
import { styledMediaQuery } from 'app/components/shared';
import HeaderLogo from './logo.jpeg';

export const LogoIcon: React.FC = () => <SIcon url={HeaderLogo} />;

const SIcon = styled.div<{ url: string }>`
  min-width: 200px;
  min-height: 30px;
  ${styledMediaQuery('desktop')} {
    margin-top: 150px;
  }
  ${({ url }) => {
    return `background: url(${url});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;`;
  }}}
  margin-bottom: 100px;
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
export const ThankYouView = () => {
  const classes = useStyles();
  return (
    <>
      <BasicPage
        title={'ThankYou'}
        description={'Thank You Page Page'}
        hideHeader={true}
        hideFooter={true}
      >
        <Container>
          <div className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <LogoIcon />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h6" variant="h6" className={classes.h6}>
                  {'Thank you for signing up to our Newsletter.'}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
      </BasicPage>
    </>
  );
};

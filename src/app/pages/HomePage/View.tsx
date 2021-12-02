import { BasicPage } from '../../templates/BasicPage';
import { Container } from '@material-ui/core';

import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import styled from 'styled-components';
import HeaderLogo from './face.png';
import { styledMediaQuery } from 'app/components/shared';
import CV from './cv.pdf';

export const LogoIcon: React.FC = () => <SIcon url={HeaderLogo} />;

const SIcon = styled.div<{ url: string }>`
  min-width: 100px;
  min-height: 300px;
  margin-bottom: 50px;
  ${({ url }) => {
    return `background: url(${url});
            background-repeat: no-repeat;
            ${styledMediaQuery('desktop')} {
              background-position: right;
            }
            background-position: center;
            background-size: contain;`;
  }}}
`;

const STitle = styled.h1`
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 2px;
  ${styledMediaQuery('desktop')} {
    margin-right: 500px;
    font-size: 60px;
  }
`;

const SText = styled.h2`
  margin-bottom: 20px;
  margin-right: 0px;
  font-weight: 300;
  ${styledMediaQuery('desktop')} {
    margin-left: 50px;
  }
`;

const SButton = styled.a`
  flex: 1;
  cursor: pointer;
  color: white;
  font-size: 20px;
  line-height: 28px;
  font-family: var(--secondary-font-family);
  text-align: center;
  text-decoration-line: none;
  background-color: black;
  padding: 9px 23px 13px 26px;
  border: none;
  font-weight: 400;
  margin-bottom: 20px;
  width: 150px;
  ${styledMediaQuery('desktop')} {
    margin-left: 50px;
  }
`;

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: 0,
    font: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    letterSpacing: '0.2em',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
}));
export const HomePageView = () => {
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
                <STitle>LINDA ZHU</STitle>
              </Grid>
              <Grid item xs={12} md={4}>
                <LogoIcon />
              </Grid>
              <Grid item xs={12} md={8}>
                <SText>{"Hi I'm Linda!"}</SText>
                <SText>
                  {
                    'I am a second year PhD student in Marketing at the Hong Kong University of Science and Technology (HKUST).'
                  }
                </SText>
                <SButton
                  type="submit"
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/linda-zhu-345408101/"
                >
                  LinkedIn
                </SButton>
                <SButton
                  type="submit"
                  color="primary"
                  target="_blank"
                  href={CV}
                >
                  CV
                </SButton>
              </Grid>
            </Grid>
          </div>
        </Container>
      </BasicPage>
    </>
  );
};

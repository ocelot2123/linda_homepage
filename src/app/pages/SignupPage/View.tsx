import { BasicPage } from '../../templates/BasicPage';
import { Container } from '@material-ui/core';
import * as React from 'react';
import { Props as SignupFormProps } from '../../components/SignUpForm/Props';
import { SignUpForm } from '../../components/SignUpForm';

interface Props extends SignupFormProps {}

export const SignupView = (props: Props) => {
  return (
    <>
      <BasicPage
        title={'Signup'}
        description={'Login Page'}
        hideHeader={true}
        hideFooter={true}
      >
        <Container maxWidth={'xs'}>
          <SignUpForm {...props} />
        </Container>
      </BasicPage>
    </>
  );
};

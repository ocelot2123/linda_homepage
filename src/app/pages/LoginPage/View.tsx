import { Container } from '@material-ui/core';
import { SignInForm } from '../../components/SignInForm';
import * as React from 'react';
import { Props as SigninFormProps } from '../../components/SignInForm/Props';
import { BasicPage } from '../../templates/BasicPage';

interface Props extends SigninFormProps {}

export const LoginView: React.FC<Props> = props => {
  return (
    <>
      <BasicPage
        title={'Login'}
        description={'Login Page'}
        hideHeader={true}
        hideFooter={true}
      >
        <Container maxWidth={'xs'}>
          <SignInForm {...props} />
        </Container>
      </BasicPage>
    </>
  );
};

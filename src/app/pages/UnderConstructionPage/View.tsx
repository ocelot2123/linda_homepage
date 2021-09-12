import { BasicPage } from '../../templates/BasicPage';
import { Container } from '@material-ui/core';
import * as React from 'react';
import { Props as UnderConstructionProps } from '../../components/UnderConstructionForm/Props';
import { UnderConstructionForm } from '../../components/UnderConstructionForm';

interface Props extends UnderConstructionProps {}

export const UnderConstructionView = (props: Props) => {
  return (
    <>
      <BasicPage
        title={'Signup'}
        description={'Login Page'}
        hideHeader={true}
        hideFooter={true}
      >
        <Container>
          <UnderConstructionForm {...props} />
        </Container>
      </BasicPage>
    </>
  );
};

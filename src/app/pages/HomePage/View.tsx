import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { BasicPage } from '../../templates/BasicPage';

interface Props {
  logoff: () => void;
}

export const View: React.FC<Props> = props => {
  return (
    <BasicPage title={'Home Page'} description={'Home Page'}>
      <span>HomePage container</span>
      <Button onClick={() => props.logoff()}> Log Off </Button>
    </BasicPage>
  );
};

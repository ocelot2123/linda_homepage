import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../routes/paths';
import { BasicPage } from '../../templates/BasicPage';

interface Props {
  logoff: () => void;
}

export const View: React.FC<Props> = props => {
  return (
    <BasicPage title={'People Page'} description={'People Page'}>
      <span>People container</span>
      <Link to={baseUrl}>Home Page</Link>
      <Button onClick={() => props.logoff()}> Log Off </Button>
    </BasicPage>
  );
};

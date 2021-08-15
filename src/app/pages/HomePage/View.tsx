import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { searchUrl } from '../../routes/paths';
import { BasicPage } from '../../templates/BasicPage';

interface Props {
  logoff: () => void;
}

export const View: React.FC<Props> = props => {
  return (
    <BasicPage title={'Home Page'} description={'Home Page'}>
      <span>HomePage container</span>
      <Link to={searchUrl}>Search Page</Link>
      <Button onClick={() => props.logoff()}> Log Off </Button>
    </BasicPage>
  );
};

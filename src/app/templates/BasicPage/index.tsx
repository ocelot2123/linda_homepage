/**
 *
 * Page
 *
 */
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { PageContainer, PageContainerProps } from '../PageContainer';
import { useStyles } from './Styles';

interface Props extends PageContainerProps {
  title: string;
  description: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  loading?: boolean;
}

export const BasicPage: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <PageContainer title={props.title} description={props.description}>
      <>
        {props.loading ? (
          <CircularProgress />
        ) : (
          <>
            <main className={classes.content}>
              <div style={{ minHeight: '45rem' }}>{props.children}</div>
            </main>
          </>
        )}
      </>
    </PageContainer>
  );
};

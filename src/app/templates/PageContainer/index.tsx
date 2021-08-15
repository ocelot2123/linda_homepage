/**
 *
 * Page
 *
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStyles } from './Styles';

export interface PageContainerProps {
  title: string;
  description: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  children,
}) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className={classes.root}>{children}</div>
    </>
  );
};

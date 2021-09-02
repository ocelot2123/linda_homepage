import clsx from 'clsx';
/**
 *
 * Page
 *
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useUserSlice } from '../../slice';
import { selectUser } from '../../slice/selectors';
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
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const open = user && user.sidebarOpen;
  const { actions } = useUserSlice();
  const toggleDrawer = () => {
    dispatch(actions.toggleSidebarOpen());
  };

  return (
    <PageContainer title={props.title} description={props.description}>
      <>
        <CssBaseline />
        {!props.hideHeader && (
          <>
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Header open={open} handleDrawerOpen={toggleDrawer} />
            </AppBar>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            ></Drawer>
          </>
        )}
        {props.loading ? (
          <CircularProgress />
        ) : (
          <>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <div style={{ minHeight: '45rem' }}>{props.children}</div>
              {!props.hideFooter && <Footer />}
            </main>
          </>
        )}
      </>
    </PageContainer>
  );
};

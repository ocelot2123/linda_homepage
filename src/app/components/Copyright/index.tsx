/**
 *
 * Copyright
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Typography } from '@material-ui/core';

interface Props {}

export const Copyright = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t('copyright')} {new Date().getFullYear()}{' '}
      <Link color="inherit" href="https://material-ui.com/">
        {t('title')}
      </Link>
      {'.'}
    </Typography>
  );
});

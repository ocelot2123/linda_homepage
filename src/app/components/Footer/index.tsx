/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

interface Props {}

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography>© New co.</Typography>
    </div>
  );
});

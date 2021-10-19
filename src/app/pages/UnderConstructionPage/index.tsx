import React from 'react';

import { UnderConstructionView } from './View';

export function UnderConstructionPage() {
  const [email, setEmail] = React.useState('');

  const setUsernameState = v => setEmail(v);

  return (
    <>
      <UnderConstructionView username={email} setUsername={setUsernameState} />
    </>
  );
}

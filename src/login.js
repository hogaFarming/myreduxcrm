import React from 'react';
import {render} from 'react-dom';

import LanguageProvider from './components/LanguageProvider';
import Login from './modules/Login';

main();

function main() {
  const root = document.getElementById('root');
  const login = (
    <LanguageProvider>
      <Login />
    </LanguageProvider>
  );
  render(login, root);
}

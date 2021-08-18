import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ContextProvider } from './state/ContextProvider';

render(
  <ContextProvider>
    <App />
  </ContextProvider>
  ,
  document.getElementById('root')
);

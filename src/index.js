import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './route';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

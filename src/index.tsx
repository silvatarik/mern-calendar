import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './Application';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

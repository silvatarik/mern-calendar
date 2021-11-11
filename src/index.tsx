import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './Application';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';

console.log(process.env)

ReactDOM.render(
    <Application />,
  document.getElementById('root')
);
reportWebVitals();

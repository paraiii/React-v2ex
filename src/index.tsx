import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
export * from './App';
export * from './Mock2';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
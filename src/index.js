import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import bootstrap from "bootstrap"
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

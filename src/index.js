import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter } from "react-router-dom";
/* this website uses React Router v6, as per their documentation, BrowserRouter is set in the index file */

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Route
} from "react-router-dom";
import AppContext, { AppProvider } from './context/AppContext'
import './firebase'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Route>
        <App />
      </Route>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

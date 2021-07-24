import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import store  from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { 
  BrowserRouter as Router,
  // Link,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

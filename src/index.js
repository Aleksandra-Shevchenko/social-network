import './index.css';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      {/* создаем контекст  для App, что бы все компоненты имели к нему доступ*/}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




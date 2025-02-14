import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import reduxStore from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import rootReducers from './Reducers';

import  thunk from 'redux-thunk';

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);




serviceWorker.unregister();

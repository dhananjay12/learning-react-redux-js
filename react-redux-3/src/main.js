import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Route, BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import myroutes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {myroutes}
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
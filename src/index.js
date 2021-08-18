import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Create redux store
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/Reducer'
const store = createStore(Reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
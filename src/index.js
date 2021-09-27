import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import productReducer from './reducers/productReducer';
import filterReducer from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  products: productReducer,
  filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools())
console.log("the state is:", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

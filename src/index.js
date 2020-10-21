import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const orderQuantityReducer = (state = [], action) => {
  if (action.type === 'GET_QUANTITY') {
    return (state = action.payload);
  }
  return state;
};

const customerReducer = (state = [], action) => {
  if (action.type === 'ADD_NEW_CUSTOMER') {
    return [...state, action.payload];
  }
  return state;
};

const pizzaReducer = (state = [], action) => {
  if (action.type === 'GET_PIZZA') {
    return (state = action.payload);
  }
  return state;
};

const pizzaBillTotalReducer = (state = { count: 0 }, action) => {
  if (action.type === 'ADD_NUMBER') {
    return { count: Number(state.count) + Number(action.payload) };
  }
  return state;
};

const addToCartReducer = (state = [], action) => {
  //   console.log('in addToCartReducer', action.payload);
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_FROM_CART') {
    let newState = [];
    for (let i = 0; i < state.length; i++) {
      if (action.payload.id !== state[i].id) {
        newState.push(state[i]);
      }
    }
    return newState;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    customerReducer,
    pizzaReducer,
    pizzaBillTotalReducer,
    addToCartReducer,
    orderQuantityReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

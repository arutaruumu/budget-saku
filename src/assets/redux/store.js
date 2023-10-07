import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Optional middleware for handling asynchronous actions
import rootReducer from './reducers'; // Import your root reducer

const middleware = [thunk]; // Add any middleware you want to use (e.g., thunk for async actions)

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;

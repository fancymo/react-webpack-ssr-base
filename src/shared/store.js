import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { header, queryData } from './reducer.js';
import overviewState from './module/overview/main/reducer.js';

const appReducer = combineReducers({
  header,
  overviewState
});

// 独立出来，供服务端和客户端使用
export default function configureStore(initialState) {
  const store = createStore(appReducer, initialState, applyMiddleware(thunk));
  return store;
}

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/reducersIndex';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
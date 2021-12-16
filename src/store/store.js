import userReducer from './user/reducer';
import createSagaMiddleware from 'redux-saga';
import { userWatcher } from './user/saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';


const saga = createSagaMiddleware();

const reducers = combineReducers({
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(userWatcher);

export default store;
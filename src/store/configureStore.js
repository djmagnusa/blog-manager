import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import postReducer from '../reducers/post';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {
    
const store = createStore(
    combineReducers({
        posts: postReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //to make states accessible to redux dev tool
  );

  return store;
};

//Store creation

import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from'redux-thunk';
import{applyMiddleware,combineReducers,createStore}from'redux'
import{composeWithDevTools}from'redux-devtools-extension';


export default function configureStore(history,initialState) {
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  
  const rootReducer = combineReducers({
    router:connectRouter(history)
  });
    

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

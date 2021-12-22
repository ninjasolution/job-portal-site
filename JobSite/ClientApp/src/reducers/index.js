import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import { auth } from './authenticatedUser'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export  function configStore (initialState) {
    const middlewareEnhancer = applyMiddleware(reduxThunk, createLogger(), routerMiddleware(history))
    const composeEnhancer = composeWithDevTools(middlewareEnhancer )
    const rootReducer = combineReducers({
        routing: routerReducer,
        auth
    });

    const store = createStore(
        rootReducer, 
        initialState,
        composeEnhancer
    )
    
    return store;
}
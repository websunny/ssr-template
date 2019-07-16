import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export function configureStore (initialState) {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}


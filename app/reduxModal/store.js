import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

const rootReducer = combineReducers({ reducer })

export const store = createStore(rootReducer, applyMiddleware(thunk));
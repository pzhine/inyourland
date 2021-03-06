import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import app from './app/reducer'
import scene from './scene/reducer'

const reducer = combineReducers({ app, scene })
const middlewares = [thunk, createSocketIoMiddleware(io(), 'server/')]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}
const enhancer = applyMiddleware(...middlewares)

export default createStore(reducer, {}, enhancer)

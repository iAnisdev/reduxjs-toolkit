const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit')
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const todoReducer = require('../features/todo/todoSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


console.log(store)

module.exports = store
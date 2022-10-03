const store = require('./app/store')
const { fetchTodos } = require('./features/todo/todoSlice')

store.dispatch(fetchTodos(1))

store.dispatch(fetchTodos(2))
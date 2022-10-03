const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const fetchTodos = createAsyncThunk('todo/fetchTodos', (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((resp) => resp.data)
})


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        loading: false,
        todo: {},
        error: ''
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todo = action.payload
            state.error = ''
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false
            state.todo = {}
            state.error = action.error.message
        })
    }
})

module.exports = todoSlice.reducer
module.exports.fetchTodos = fetchTodos
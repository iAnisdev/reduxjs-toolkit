const { createSlice } = require('@reduxjs/toolkit')


const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        available: 5
    },
    reducers: {
        ordered: (state) => {
            state.available--;
        },
        reStocked: (state, action) => {
            state.available += action.payload
        }
    }
})


module.exports = iceCreamSlice.reducer

module.exports.iceCreamActions = iceCreamSlice.actions
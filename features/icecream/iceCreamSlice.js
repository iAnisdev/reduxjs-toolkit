const { createSlice } = require('@reduxjs/toolkit')


const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        available: 15
    },
    reducers: {
        ordered: (state) => {
            state.available--;
        },
        reStocked: (state, action) => {
            state.available += action.payload
        }
    },
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.available--;
        }
    }
})


module.exports = iceCreamSlice.reducer

module.exports.iceCreamActions = iceCreamSlice.actions
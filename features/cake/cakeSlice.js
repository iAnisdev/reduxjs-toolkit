const { createSlice } = require('@reduxjs/toolkit')


const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        available: 10
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


module.exports = cakeSlice.reducer

module.exports.cakeActions = cakeSlice.actions
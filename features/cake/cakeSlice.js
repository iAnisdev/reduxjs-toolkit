const { createSlice } = require('@reduxjs/toolkit')


const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        noOfCakes: 10
    },
    reducers: {
        ordered: (state) => {
            state.noOfCakes--;
        },
        reStocked: (state, action) => {
            state.noOfCakes += action.payload
        }
    }
})


module.exports = cakeSlice.reducer

module.exports.cakeActions = cakeSlice.actions
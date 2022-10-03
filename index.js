const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
console.log('initial ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("update store ", store.getState())
});


store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.reStocked(5))
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.reStocked(12))

unsubscribe()
export default store => next => action => {
    console.log('we are in mw');
    //console.log('---', 'state before:', store.getState())
    //console.log('---', 'dispatching', action)
    //next(action)
    //console.log('---', 'state after: ', store.getState())
}
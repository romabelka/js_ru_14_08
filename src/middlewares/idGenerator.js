export default store => next => action => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const guid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

    if (!action.payload.id) {
        action.payload.id = guid()
    }

    next(action)
}

export default store => next => action => {
    if (action.generateId) {

        const date = new Date()
        const id = date.getFullYear() + date.getMonth() + date.getDay()+ date.getMilliseconds()

        next({
            ...action,
            id
        })
    } else {
        next(action)
    }
}
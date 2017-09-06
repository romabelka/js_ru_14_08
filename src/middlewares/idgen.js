
export default store => next => action => {
    if(action.type === 'ADD_COMMENT'){
        let newId = '_' + Math.random().toString(36).substr(2, 9);
        
        let newAction = Object.assign({}, action)
        newAction.payload.comment=Object.assign({}, action.payload.comment, { id: newId})
        next(newAction)
    }else{
        next(action)
    }  

}
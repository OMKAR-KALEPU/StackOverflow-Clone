const questionReducer = (state={data:null},action)=>{
    switch(action.type){
        case "POST_QUESTION":
            return {...state}
        case "POST_ANSWER":
            return {...state,data:null}
        case "FETCH_ALL_QUESTIONS":
            return {...state, data:action.payload}
        default:
            return state
    }
}

export default questionReducer
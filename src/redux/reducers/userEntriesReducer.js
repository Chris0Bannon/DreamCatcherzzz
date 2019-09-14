const allUserEntryReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_ALL_USER_ENTRIES':
            return action.payload;
            default:
                return state;
    }
}

export default allUserEntryReducer
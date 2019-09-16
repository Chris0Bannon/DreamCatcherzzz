const mostRecentUserEntryReducer = (state = [], action) => {
    switch(action.type){
         case 'SET_MOST_RECENT_USER_ENTRIES':
            return action.payload;
        case 'CHANGE_MOST_RECENT':
            console.log(action.payload);
            
            return state[action.payload] 
            default:
                return state;

    }
}

export default mostRecentUserEntryReducer
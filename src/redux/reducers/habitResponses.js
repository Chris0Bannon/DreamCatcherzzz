const habitResponseReducer = (state = [], action) => {


    switch (action.type) {
        case 'ADD_HABIT_RESPONSE':
            return [...state, action.payload]
        case 'RESET_HABIT_RESPONSES':
            return state =[]
        case 'REMOVE_RECENT_HABIT':
          const everythingToKeep = state.slice(0, state.length -1);
            return everythingToKeep;
        default:
            return state;
    }
}
export default habitResponseReducer;
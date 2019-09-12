const habitResponseReducer = (state = [], action) => {


    switch (action.type) {
        case 'ADD_HABIT_RESPONSE':
            return [...state, action.payload]
        case 'RESET_HABIT_RESPONSES':
            return state =[]
        default:
            return state;
    }
}
export default habitResponseReducer;
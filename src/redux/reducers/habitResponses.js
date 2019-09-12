const habitResponseReducer = (state = [], action) => {


    switch (action.type) {
        case 'ADD_HABIT_RESPONSE':
            return [...state, action.payload]
        default:
            return state;
    }
}
export default habitResponseReducer;
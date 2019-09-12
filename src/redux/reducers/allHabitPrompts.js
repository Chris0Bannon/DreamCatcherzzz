const allHabitPromptsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_ALL_HABIT_PROMPTS':
            return action.payload;
            default:
                return state;
    }
}
export default allHabitPromptsReducer;
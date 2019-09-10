const habitPromptReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HABIT_PROMPTS':
            return action.payload;
        default: 
        return state;
    }
}

export default habitPromptReducer;
const allSelfReportPromptReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALL_SELF_REPORT_PROMPTS':
            return action.payload;
            default:
                return state;
    }
}
export default allSelfReportPromptReducer;
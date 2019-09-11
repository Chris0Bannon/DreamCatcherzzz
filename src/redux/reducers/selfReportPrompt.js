const selfReportPromptReducer = (state =[], action) => {
    switch(action.type) {
        case 'SET_SELF_REPORT_PROMPTS':
            return action.payload;
            default:
                return state;
    }
}
export default selfReportPromptReducer;
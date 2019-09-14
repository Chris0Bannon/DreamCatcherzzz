const selfReportResponsesReducer = (state = [], action) => {
   
   
    switch(action.type){
        case 'ADD_SELF_REPORT':
            return [...state, action.payload]
        case 'RESET_SELF_REPORT_RESPONSES':
            return state = []
        case 'REMOVE_RECENT_SELF_REPORT':
            const everyThingToKeep = state.slice(0, state.length -1);
            return everyThingToKeep;
        default:
            return state;
    }
}
export default selfReportResponsesReducer;
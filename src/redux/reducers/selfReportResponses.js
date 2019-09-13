const selfReportResponsesReducer = (state = [], action) => {
   
   
    switch(action.type){
        case 'ADD_SELF_REPORT':
            return [...state, action.payload]
        case 'RESET_SELF_REPORT_RESPONSES':
            return state = []
        default:
            return state;
    }
}
export default selfReportResponsesReducer;
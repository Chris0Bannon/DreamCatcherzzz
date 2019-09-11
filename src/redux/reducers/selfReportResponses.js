const selfReportResponsesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_SELF_REPORT':
            return action.payload
        default:
            return state;
    }
}
export default selfReportResponsesReducer;
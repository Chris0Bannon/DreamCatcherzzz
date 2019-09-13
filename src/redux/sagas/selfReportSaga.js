import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function * fetchSelfReportPrompts(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.get(`/api/selfReportPrompts/${action.payload}`, config);
        yield put({type: 'SET_SELF_REPORT_PROMPTS', payload: response.data});
    }catch(error){
        console.log('self report prompt get request failed', error);
        
    }
}
function* fetchAllSelfReportPrompts() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`api/habitPrompts`, config)
        yield put({ type: 'SET_ALL_SELF_REPORT_PROMPTS', payload: response.data });
    } catch (error) {
        console.log('error in fetch all habit prompts', error);
    }
}

function* addSelfReportResponse(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post(`/api/selfReportPrompts/`, { user_response: action.payload }, config)
    } catch (error) {
        console.log('error in ADD_SELF_REPORT_RESPONSE', error);

    }
}



function * selfReportSaga(){
    yield takeLatest('FETCH_SELF_REPORT_HABIT_PROMPTS', fetchSelfReportPrompts)
    yield takeLatest('FETCH_ALL_SELF_REPORT_PROMPTS', fetchAllSelfReportPrompts)
    yield takeLatest('ADD_SELF_REPORT_RESPONSES', addSelfReportResponse)
}

export default selfReportSaga;
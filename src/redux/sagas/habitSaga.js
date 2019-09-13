import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';

function * fetchHabitPrompts(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
       
        const response = yield axios.get(`/api/habitPrompts/${action.payload}`, config);
        yield put ({type: 'SET_HABIT_PROMPTS', payload: response.data});
    }catch(error) {
        console.log('Habit prompt get request failed', error);
    }
}

function * fetchAllHabitPrompts(){
    try{
     const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    const response = yield axios.get(`api/habitPrompts`, config)
    yield put ({type: 'SET_ALL_HABIT_PROMPTS', payload: response.data});
}catch(error){
    console.log('error in fetch all habit prompts', error);
}
}

function * addHabitResponse(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post(`/api/habitPrompts/`, {user_response: action.payload}, config)
    }catch(error) {
        console.log('error in ADD_HABIT_RESPONSE', error);
        
    }
}

function * habitPromptSaga(){
    yield takeLatest('FETCH_HABIT_PROMPTS', fetchHabitPrompts);
    yield takeLatest('FETCH_ALL_HABIT_PROMPTS', fetchAllHabitPrompts);
    yield takeLatest('ADD_HABIT_RESPONSES', addHabitResponse);
    
}

export default habitPromptSaga;
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

function * habitPromptSaga(){
    yield takeLatest('FETCH_HABIT_PROMPTS', fetchHabitPrompts);
}

export default habitPromptSaga;
import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function * fetchAllUserEntries(){
    try{
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
};
const response = yield axios.get(`/api/userEntries`, config)
yield put ({type: 'SET_ALL_USER_ENTRIES', payload: response.data})
    }catch(error){
        console.log('error in fetchAllUserEntries', error);   
    }
}

function * userEntrySaga(){
    yield takeLatest('FETCH_ALL_USER_ENTRIES', fetchAllUserEntries)
}


export default userEntrySaga;
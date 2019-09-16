import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function * fetchAllUserEntries(){
    try{
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
};
const response = yield axios.get(`/api/userEntries/`, config)
yield put ({type: 'SET_ALL_USER_ENTRIES', payload: response.data})
    }catch(error){
        console.log('error in fetchAllUserEntries', error);   
    }
}

function * fetchMostRecentUserEntry (){
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/userEntries/mostRecent`, config)
        yield put({ type: 'SET_MOST_RECENT_USER_ENTRIES', payload: response.data })
    } catch (error) {
        console.log('error in fetchAllUserEntries', error);
    }
} 

function * updateUserEntry(action){
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.put(`api/userEntries/edit`, action.payload)
        .then((result) => {
            console.log((result));    
        })
        yield put({
            type:'FETCH_MOST_RECENT_USER_ENTRY'
        })
    }catch(error){
        console.log('error in update user entry', error);
        
    }
}



function * userEntrySaga(){
    yield takeLatest('UPDATE_ITEM', updateUserEntry)
    yield takeLatest('FETCH_ALL_USER_ENTRIES', fetchAllUserEntries)
    yield takeLatest('FETCH_MOST_RECENT_USER_ENTRY', fetchMostRecentUserEntry)
}


export default userEntrySaga;
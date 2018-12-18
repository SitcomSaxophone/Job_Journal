import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchJobs(action) {
    try {
        const jobsResponse = yield call(axios.get, '/api/jobs');
        yield put({type: 'SET_JOBS', payload: jobsResponse.data});
    } catch (error) {
        console.log('Error fetching jobs: ', error);
    }
}

function* addJob(action) {
    try {
        yield call(axios.post, '/api/jobs', action.payload);
        yield put({ type: 'FETCH_JOBS'});
    } catch(error) {
        console.log('Error adding job: ', error);
    }
}

function* deleteJob(action) {
    try {
        yield call(axios.delete, '/api/jobs', { params: action.payload });
        yield put({type: 'FETCH_JOBS'});
    } catch (error) {
        console.log('Error deleting job: ', error);
    }
}

function* jobsSaga() {
    yield takeLatest('FETCH_JOBS', fetchJobs);
    yield takeLatest('ADD_JOB', addJob);
    yield takeLatest('DELETE_JOB', deleteJob);
}

export default jobsSaga;
import { all } from 'redux-saga/effects';
import jobsSaga from './jobs.saga';

export default function* rootSaga() {
    yield all([
        jobsSaga(),
    ])
}
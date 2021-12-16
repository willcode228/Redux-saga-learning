import { takeEvery, call, put } from 'redux-saga/effects';
import { userApi } from '../../api/userApi';
import { FETCH_USER, setUserLoading, setUserSuccess } from './actions';

function* fetchUserWorker() {
    yield put(setUserLoading(true));

    const data = yield call(() => new Promise(res => res(userApi.getUser('json'))));
    yield put(setUserSuccess(data));

    yield put(setUserLoading(false));
}

export function* userWatcher(){
    yield takeEvery(FETCH_USER, fetchUserWorker);
}
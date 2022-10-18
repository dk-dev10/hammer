import { all, call, put, takeEvery } from "redux-saga/effects";
import { API_JSON_PLACEHOLDER } from "constants/ApiConstant";
import { getUsers, getUser } from "redux/actions/Users";
import { FETCHED_USERS, FETCHED_USER } from "redux/constants/Users";

function* watchFetchUsers() {
	yield takeEvery(FETCHED_USERS, fetchUsersAsync);
}

function* watchFetchUser() {
	yield takeEvery(FETCHED_USER, fetchUserAsync);
}

function* fetchUsersAsync() {
	try {

		const data = yield call(() => {
			return fetch(API_JSON_PLACEHOLDER)
				.then(response => response.json())
		}
		);
		yield put(getUsers(data));
	} catch (error) {
		// yield put(requestUsersError());
	}
}

function* fetchUserAsync({ payload }) {
	try {

		const data = yield call(() => {
			return fetch(`${API_JSON_PLACEHOLDER}/${payload}`)
				.then(response => response.json())
		}
		);
		yield put(getUser(data));
	} catch (error) {
		// yield put(requestUsersError());
	}
}

export default function* rootSaga() {
	yield all([
		watchFetchUsers(),
		watchFetchUser()
	]);
}


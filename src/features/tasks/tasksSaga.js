import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, fetchLoadingStateSuccess, fetchLoadingStateError, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(fetchLoadingStateSuccess());
    }
    catch (error) {
        yield call(alert, "Coś poszło nie tak!");
        yield put(fetchLoadingStateError());
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);

};
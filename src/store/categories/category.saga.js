// import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase";

import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
    // put in redux-saga does the work of dispatch in redux thunk
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
  //   takeLatest takes two argument:
  //  action you want to resond to and,
  //the function to run when the action occurs(what you want to happen )
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

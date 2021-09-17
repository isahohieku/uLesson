import { AppState } from '@types';
import { combineReducers } from '@utils/context';
import { allLessonsReducer } from './all_lessons';
import { promotedReducer } from './promoted_lessons';
import { userLessonsReducer } from './user_lessons';

export const initialState: AppState = {
    promotedLessons: [],
    allLessons: [],
    userLessons: [],
    allLessonsLoading: false,
    userLessonsLoading: false,
    promotedLessonsLoading: false
};

export const reducer = combineReducers({
    allLessonsReducer,
    promotedReducer,
    userLessonsReducer,
});

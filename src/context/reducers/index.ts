import { AppState } from '@types';
import { combineReducers } from '@utils/context';
import { allLessonsReducer as allLessons } from './all_lessons';
import { promotedReducer as promotedLessons } from './promoted_lessons';
import { userLessonsReducer as userLessons } from './user_lessons';

export const initialState: AppState = {
    promotedLessons: [],
    allLessons: [],
    userLessons: [],
    allLessonsLoading: false,
    userLessonsLoading: false,
    promotedLessonsLoading: false
};

export const reducer = combineReducers({
    allLessons,
    promotedLessons,
    userLessons,
});

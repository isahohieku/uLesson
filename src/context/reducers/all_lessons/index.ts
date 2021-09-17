import { AppState, StateAction } from '@types';
import { equals, isEmpty } from 'ramda';
import {
    SET_ALL_LESSONS,
    CLEAR_ALL_LESSONS,
    SET_ALL_LESSONS_LOADING
} from '../../types';

export const allLessonsReducer = (state: AppState, action: StateAction): AppState => {
    switch (action.type) {
        case SET_ALL_LESSONS:
            if ((state?.allLessons.length > 0) && equals(state?.allLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                allLessons: [...action.payload],
            };

        case CLEAR_ALL_LESSONS:
            if (isEmpty(state?.allLessons)) {
                return state;
            }

            return { ...state, allLessons: [] };

        case SET_ALL_LESSONS_LOADING:
            if (equals(state?.allLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                allLessonsLoading: action.payload,
            };

        default:
            return state;
    }
};

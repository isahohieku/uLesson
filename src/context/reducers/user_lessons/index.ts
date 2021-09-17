import { AppState, StateAction } from '@types';
import { equals, isEmpty } from 'ramda';
import {
    SET_USER_LESSONS,
    CLEAR_USER_LESSONS,
    SET_USER_LESSONS_LOADING
} from '../../types';

export const userLessonsReducer = (state: AppState, action: StateAction): AppState => {
    switch (action.type) {
        case SET_USER_LESSONS:
            if ((state?.userLessons.length > 0) && equals(state?.userLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                userLessons: [...action.payload],
            };

        case CLEAR_USER_LESSONS:
            if (isEmpty(state?.userLessons)) {
                return state;
            }

            return { ...state, userLessons: [] };

        case SET_USER_LESSONS_LOADING:
            if (equals(state?.userLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                userLessonsLoading: action.payload,
            };

        default:
            return state;
    }
};

import { AppState, StateAction } from '@types';
import { equals, isEmpty } from 'ramda';
import {
    SET_PROMOTED_LESSONS,
    CLEAR_PROMOTED_LESSONS,
    SET_PROMOTED_LESSONS_LOADING
} from '../../types';

export const promotedReducer = (state: AppState, action: StateAction): AppState => {

    switch (action?.type) {
        case SET_PROMOTED_LESSONS:
            if ((state?.promotedLessons?.length > 0) && equals(state?.promotedLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                promotedLessons: [...action.payload],
            };

        case CLEAR_PROMOTED_LESSONS:
            if (isEmpty(state?.promotedLessons)) {
                return state;
            }

            return { ...state, promotedLessons: [] };

        case SET_PROMOTED_LESSONS_LOADING:
            if (equals(state?.promotedLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                promotedLessonsLoading: action.payload,
            };

        default:
            return state;
    }
};

import { AppState, StateAction } from '@types';
import { equals, isEmpty } from 'ramda';
import {
    SET_PROMOTED_LESSONS,
    SET_ALL_LESSONS,
    SET_USER_LESSONS,
    CLEAR_PROMOTED_LESSONS
} from '../types';

export const initialState: AppState = {
    promotedLessons: [],
    allLessons: [],
    userLessons: [],
};

export const reducer = (state: AppState, action: StateAction): AppState => {
    switch (action.type) {
        case SET_PROMOTED_LESSONS:
            if (equals(state.promotedLessons, action.payload)) {
                return state;
            }

            return {
                ...state,
                promotedLessons: {
                    ...state.promotedLessons,
                    ...action.payload,
                },
            };

        case CLEAR_PROMOTED_LESSONS:
            if (isEmpty(state.promotedLessons)) {
                return state;
            }

            return { ...state, promotedLessons: [] };

        default:
            return state;
    }
};

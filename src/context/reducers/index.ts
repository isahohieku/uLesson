import { AppState, StateAction } from '@types';
import { equals, isEmpty } from 'ramda';
import {
    SET_RECORD,
    CLEAR_ERROR
} from '../types';

export const initialState: AppState = {
    records: []
};

export const reducer = (state: AppState, action: StateAction): AppState => {
    switch (action.type) {
        case SET_RECORD:
            if (equals(state.records, action.payload)) {
                return state;
            }

            return {
                ...state,
                records: {
                    ...state.records,
                    ...action.payload,
                },
            };

        case CLEAR_ERROR:
            if (isEmpty(state.records)) {
                return state;
            }

            return { ...state, records: [] };

        default:
            return state;
    }
};

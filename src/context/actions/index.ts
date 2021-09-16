import { SET_PROMOTED_LESSONS, CLEAR_PROMOTED_LESSONS } from "@context/types";

export const setRecord = dispatch => data => {
    dispatch({ type: SET_PROMOTED_LESSONS, payload: data });
};

export const clearRecord = dispatch => () => {
    dispatch({ type: CLEAR_PROMOTED_LESSONS });
};

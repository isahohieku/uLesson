import { SET_RECORD, CLEAR_ERROR } from "@context/types";

export const setRecord = dispatch => data => {
    dispatch({ type: SET_RECORD, payload: data });
};

export const clearRecord = dispatch => () => {
    dispatch({ type: CLEAR_ERROR });
};

import { SET_USER_LESSONS, CLEAR_USER_LESSONS, SET_USER_LESSONS_LOADING } from "@context/types";

export const setUserLessons = dispatch => (data): void => {
    dispatch({ type: SET_USER_LESSONS, payload: data });
};

export const setUserLessonsLoading = dispatch => (data: boolean): void => {
    dispatch({ type: SET_USER_LESSONS_LOADING, payload: data });
};

export const clearUserLessons = dispatch => (): void => {
    dispatch({ type: CLEAR_USER_LESSONS });
};

const getUserLessonsActions = dispatch => ({
    setUserLessons: setUserLessons(dispatch),
    setUserLessonsLoading: setUserLessonsLoading(dispatch),
    clearUserLessons: clearUserLessons(dispatch)
});

export default getUserLessonsActions;

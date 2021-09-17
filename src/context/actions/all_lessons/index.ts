import { SET_ALL_LESSONS, CLEAR_ALL_LESSONS, SET_ALL_LESSONS_LOADING } from "@context/types";

export const setAllLessons = dispatch => (data): void => {
    dispatch({ type: SET_ALL_LESSONS, payload: data });
};

export const setAllLessonsLoading = dispatch => (data: boolean): void => {
    dispatch({ type: SET_ALL_LESSONS_LOADING, payload: data });
};

export const clearAllLessons = dispatch => (): void => {
    dispatch({ type: CLEAR_ALL_LESSONS });
};

const getAllLessonsActions = dispatch => ({
    setAllLessons: setAllLessons(dispatch),
    setAllLessonsLoading: setAllLessonsLoading(dispatch),
    clearAllLessons: clearAllLessons(dispatch)
});

export default getAllLessonsActions;

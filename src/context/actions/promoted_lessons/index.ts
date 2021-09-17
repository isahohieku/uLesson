import { SET_PROMOTED_LESSONS, CLEAR_PROMOTED_LESSONS, SET_PROMOTED_LESSONS_LOADING } from "@context/types";

export const setPromotedLessons = dispatch => (data): void => {
    dispatch({ type: SET_PROMOTED_LESSONS, payload: data });
};

export const setPromotedLessonsLoading = dispatch => (data: boolean): void => {
    dispatch({ type: SET_PROMOTED_LESSONS_LOADING, payload: data });
};

export const clearPromotedLessons = dispatch => (): void => {
    dispatch({ type: CLEAR_PROMOTED_LESSONS });
};

const getPromotedLessonsActions = dispatch => ({
    setPromotedLessons: setPromotedLessons(dispatch),
    setPromotedLessonsLoading: setPromotedLessonsLoading(dispatch),
    clearPromotedLessons: clearPromotedLessons(dispatch)
});

export default getPromotedLessonsActions;

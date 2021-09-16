import { Dispatch, ReactNode, SetStateAction } from "react";

export interface StateAction {
    type: string;
    payload: any;
}

export interface AppState {
    promotedLessons: [];
    allLessons: [];
    userLessons: [];
}

export interface AppContext {
    state: AppState;
    dispatch: Dispatch<SetStateAction<AppState>>;
}

export interface StateProviderProps {
    children: ReactNode;
}

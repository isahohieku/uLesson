import { Dispatch, ReactNode, SetStateAction } from "react";

export interface StateAction {
    type: string;
    payload: any;
}

export interface AppState {
    records: [];
}

export interface AppContext {
    state: AppState;
    dispatch: Dispatch<SetStateAction<AppState>>;
    // dispatch: ({ type }: { type: string }) => void;
}

export interface StateProviderProps {
    children: ReactNode;
}

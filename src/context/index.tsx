import { useReducer, createContext, useContext, useCallback } from 'react';
import { initialState, reducer } from '@context/reducers';
import { AppContext, AppState, StateProviderProps } from '@types';

const StateContext = createContext<AppContext>({} as AppContext);

const asyncer = (dispatch: any, state: AppState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

const StateProvider = ({ children }: StateProviderProps): JSX.Element => {

  const [state, dispatchBase] = useReducer(reducer, initialState);

  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateValue = () => useContext(StateContext);

export default StateProvider;

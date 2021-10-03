export const combineReducers = slices => (prevState, action) => Object.keys(slices).reduce(
    (nextState, nextProp) => ({
        ...nextState,
        ...slices[nextProp](prevState[nextProp], action)
    }),
    prevState
);

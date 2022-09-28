import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export default store;

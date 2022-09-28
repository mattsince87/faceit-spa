import { AnyAction } from 'redux';
import {
  ADD_TOURNAMENT,
  DELETE_TOURNAMENT,
  SET_ERROR,
  SET_LOADING,
  SET_TOURNAMENTS,
  UPDATE_TOURNAMENT,
} from '../actions/tournaments';
import { Tournament } from '../models';

export interface TournamentsState {
  tournaments: Tournament[];
  loading: boolean;
  error: string | null;
}
const initialState = {
  tournaments: [],
  loading: false,
  error: null,
};

export default function tournaments(
  state: TournamentsState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload,
      };

    case ADD_TOURNAMENT:
      return {
        ...state,
        tournaments: [action.payload, ...state.tournaments],
      };

    case UPDATE_TOURNAMENT:
      const tournaments = state.tournaments;
      const tournamentIndex = tournaments.findIndex(
        (t) => t.id === action.payload.id
      );

      tournaments[tournamentIndex] = action.payload;

      return {
        ...state,
        tournaments,
      };

    case DELETE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.filter(
          (t) => t.id !== action.payload.id
        ),
      };
  }

  return state;
}

import { RootState } from '../store';
import { TournamentsState } from '../reducers/tournaments';

export const selectTournaments = (state: RootState): TournamentsState => {
  return state.tournaments;
};

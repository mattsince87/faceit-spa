import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchTournaments } from '../actions/tournaments';
import { selectTournaments } from '../selectors/tournaments';
import Button from './Button';
import Grid from './Grid';
import TournamentCard from './TournamentCard';

const Tournaments = () => {
  const dispatch = useAppDispatch();
  const { tournaments, loading, error } = useAppSelector(selectTournaments);

  useEffect(() => {
    dispatch(fetchTournaments());
  }, [dispatch]);

  const retry = () => {
    dispatch(fetchTournaments());
  };

  if (loading) {
    return <div className="center">Loading tournaments...</div>;
  }

  if (error) {
    return (
      <div className="center">
        <p>Something went wrong.</p>
        <Button onClick={retry}>refresh</Button>
      </div>
    );
  }

  if (tournaments.length === 0) {
    return <div className="center">No tournaments found.</div>;
  }

  return (
    <Grid>
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </Grid>
  );
};

export default Tournaments;

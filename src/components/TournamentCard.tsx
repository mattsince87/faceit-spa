import { deleteTournament, updateTournament } from '../actions/tournaments';
import { useAppDispatch } from '../hooks/redux';
import { Tournament } from '../models';
import Button from './Button';
import Card from './Card';

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    const name = prompt('New tournament name:');

    if (name === null) {
      return;
    }

    dispatch(
      updateTournament({
        ...tournament,
        name,
      })
    );
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const sure = confirm('Are you sure');

    if (sure === false) {
      return;
    }

    dispatch(deleteTournament(tournament));
  };

  let startDate = tournament.startDate;
  let tournamentDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date(startDate));
  let participating = tournament.participants['current'];
  let maxParticipants = tournament.participants['max'];

  return (
    <Card>
      <h6>{tournament.name}</h6>
      <ul>
        <li>Organizer: {tournament.organizer}</li>
        <li>Game: {tournament.game}</li>
        <li>
          Participants: {participating}/{maxParticipants}
        </li>
        <li>Date: {tournamentDate}</li>
      </ul>
      <Button onClick={handleEdit}>EDIT</Button>
      <Button onClick={handleDelete}>DELETE</Button>
    </Card>
  );
};

export default TournamentCard;

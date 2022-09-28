import React, { ChangeEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import { createTournament, fetchTournaments } from './actions/tournaments';
import { useAppDispatch } from './hooks/redux';
import Button from './components/Button';
import Input from './components/Input';
import Tournaments from './components/Tournaments';

const App = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement a debounce function to fire the dispatch only
    // when the user has stopped typing in the field.
    dispatch(fetchTournaments(event.target.value));
  };

  const handleCreate = () => {
    const name = prompt('New tournament name:');

    if (name === null) {
      return;
    }

    dispatch(createTournament(name));
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <div className="actionBar">
        <Input
          onChange={handleSearch}
          placeholder="Search tournament..."
          type="search"
        />
        <Button onClick={handleCreate}>Create tournament</Button>
      </div>
      <Tournaments />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

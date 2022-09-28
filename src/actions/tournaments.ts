import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { API_TOURNAMENTS_URL } from '../constants/api';
import { Tournament } from '../models';
import { RootState } from '../store';

export const SET_LOADING = 'tournaments/SET_LOADING';
export const SET_ERROR = 'tournaments/SET_ERROR';
export const SET_TOURNAMENTS = 'tournaments/SET_TOURNAMENTS';
export const ADD_TOURNAMENT = 'tournaments/ADD_TOURNAMENT';
export const UPDATE_TOURNAMENT = 'tournaments/UPDATE_TOURNAMENT';
export const DELETE_TOURNAMENT = 'tournaments/DELETE_TOURNAMENT';

const setLoading = (payload: boolean) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

const setError = (payload: any) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const fetchTournaments =
  (query?: string) =>
  async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(setLoading(true));

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          resolve(1);
        }, 300)
      );

      const endpoint = query
        ? `${API_TOURNAMENTS_URL}?q=${query}`
        : API_TOURNAMENTS_URL;

      const response = await (await fetch(endpoint)).json();
      dispatch({
        type: SET_TOURNAMENTS,
        payload: response,
      });
    } catch (e) {
      dispatch(setError(e));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const createTournament =
  (name: string) =>
  async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    const tournament = await (
      await fetch(API_TOURNAMENTS_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })
    ).json();

    dispatch({
      type: ADD_TOURNAMENT,
      payload: tournament,
    });
  };

export const updateTournament =
  (tournament: Tournament) =>
  (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch({
      type: UPDATE_TOURNAMENT,
      payload: tournament,
    });

    fetch(`${API_TOURNAMENTS_URL}/${tournament.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: tournament.name }),
    });
  };

export const deleteTournament =
  (tournament: Tournament) =>
  (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch({
      type: DELETE_TOURNAMENT,
      payload: tournament,
    });

    fetch(`${API_TOURNAMENTS_URL}/${tournament.id}`, { method: 'DELETE' });
  };

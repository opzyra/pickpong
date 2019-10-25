import React, { useReducer, createContext, useContext } from 'react';

const FETCH_MISSIONS = 'mission/FETCH_MISSIONS';
const SET_STATUS = 'mission/SET_STATUS';

export const fetchMissions = missions => ({ type: FETCH_MISSIONS, missions });

export const setStatus = status => ({ type: SET_STATUS, status });

const initialState = {
  missions: [],
  status: [false, false, false],
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        missions: action.missions,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function MissionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useMissionState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('Not Found Provider');
  }
  return state;
}

export function useMissionDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Not Found Provider');
  }
  return dispatch;
}

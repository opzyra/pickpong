import React, { useReducer, createContext, useContext } from 'react';

const FETCH_AUTH_URL = 'auth/FETCH_AUTH_URL';
const SET_USER = 'auth/SET_USER';

export const fetchAuthUrl = authUrl => ({ type: FETCH_AUTH_URL, authUrl });
export const setUser = user => ({ type: SET_USER, user });

const initialState = {
  authUrl: null,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_AUTH_URL:
      return {
        ...state,
        authUrl: action.authUrl,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useAuthState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('Not Found Provider');
  }
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Not Found Provider');
  }
  return dispatch;
}

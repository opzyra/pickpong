import React, { useReducer, createContext, useContext } from 'react';

const SET_MODAL = 'common/SET_MODAL';
const SET_ALERT = 'common/SET_ALERT';
const SET_ROULETTE = 'common/SET_ROULETTE';
const SET_ROTATING = 'common/SET_ROTATING';

export const setModal = modal => ({ type: SET_MODAL, modal });
export const setAlert = alert => ({ type: SET_ALERT, alert });
export const setRoulette = roulette => ({ type: SET_ROULETTE, roulette });
export const setRotating = rotating => ({ type: SET_ROTATING, rotating });

const initialState = {
  loginModal: false,
  rouletteModal: false,
  rewardModal: false,
  rotating: false,
  roulette: 0,
  alert: {
    visible: false,
    type: '',
    title: '',
    description: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        [action.modal.type]: action.modal.visible,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.alert,
      };
    case SET_ROULETTE:
      return {
        ...state,
        roulette: action.roulette,
      };
    case SET_ROTATING:
      return {
        ...state,
        rotating: action.rotating,
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function CommonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useCommonState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('Not Found Provider');
  }
  return state;
}

export function useCommonDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Not Found Provider');
  }
  return dispatch;
}

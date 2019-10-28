import React, { useReducer, createContext, useContext } from 'react';

const FETCH_REWARDS = 'reward/FETCH_REWARDS';
const SET_REWARD = 'reward/SET_REWARD';

export const fetchRewards = rewards => ({ type: FETCH_REWARDS, rewards });
export const setReward = reward => ({ type: SET_REWARD, reward });

const initialState = {
  rewards: [],
  rewardType: [],
  reward: null,
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_REWARDS:
      return {
        ...state,
        rewards: action.rewards,
      };
    case SET_REWARD:
      return {
        ...state,
        reward: action.reward,
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function RewardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useRewardState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('Not Found Provider');
  }
  return state;
}

export function useRewardDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Not Found Provider');
  }
  return dispatch;
}

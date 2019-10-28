import * as apiClient from '../../utils/apiClient';
import * as rewardContext from './rewardContext';
import { onAuth } from '../../utils/token';

export async function fetchRewards(dispatch) {
  if (!onAuth()) return;

  const { rewards } = await apiClient.get('/reward');

  const fetchRewardsActionCreator = rewardContext.fetchRewards(rewards);
  dispatch(fetchRewardsActionCreator);
}

export async function setReward(dispatch) {
  if (!onAuth()) return;

  const { reward } = await apiClient.post('/reward');

  const setRewardActionCreator = rewardContext.setReward(reward);
  dispatch(setRewardActionCreator);
  return reward;
}

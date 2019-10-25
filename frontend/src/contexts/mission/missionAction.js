import * as apiClient from '../../utils/apiClient';
import * as missionContext from './missionContext';
import { onAuth } from '../../utils/token';

export async function fetchMissions(dispatch) {
  if (!onAuth()) return;

  const { missions } = await apiClient.get('/mission/user');

  let status = [false, false, false];

  missions.forEach(mission => {
    status[mission.type - 1] = true;
  });

  const fetchMissionsActionCreator = missionContext.fetchMissions(missions);
  dispatch(fetchMissionsActionCreator);

  const setStatusActionCreator = missionContext.setStatus(status);
  dispatch(setStatusActionCreator);
}

export const missionClearCheck = (missions, type) => {
  const result = missions.filter(mission => {
    return mission.type === type;
  });
  return result.length !== 0;
};

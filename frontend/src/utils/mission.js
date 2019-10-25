export const missionClearCheck = (missions, type) => {
  const result = missions.filter(mission => {
    return mission.type === type;
  });
  console.log(`type: ${type}, result.lneght: ${result.length}`);
  return result.length !== 0;
};

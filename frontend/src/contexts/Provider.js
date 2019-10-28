import React from 'react';
import { AuthProvider } from './auth/authContext';
import { MissionProvider } from './mission/missionContext';
import { RewardProvider } from './reward/rewardContext';
import { CommonProvider } from './common/commonContext';

function Provider({ children }) {
  return (
    <CommonProvider>
      <AuthProvider>
        <MissionProvider>
          <RewardProvider>{children}</RewardProvider>
        </MissionProvider>
      </AuthProvider>
    </CommonProvider>
  );
}

export default Provider;

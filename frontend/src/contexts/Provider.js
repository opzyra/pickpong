import React from 'react';
import { AuthProvider } from './auth/authContext';
import { MissionProvider } from './mission/missionContext';
import { RewardProvider } from './reward/rewardContext';
import { CommonProvider } from './common/commonContext';
import { CommentProvider } from './comment/commentContext';

function Provider({ children }) {
  return (
    <CommonProvider>
      <AuthProvider>
        <CommentProvider>
          <MissionProvider>
            <RewardProvider>{children}</RewardProvider>
          </MissionProvider>
        </CommentProvider>
      </AuthProvider>
    </CommonProvider>
  );
}

export default Provider;

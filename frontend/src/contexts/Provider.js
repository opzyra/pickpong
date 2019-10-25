import React from 'react';
import { AuthProvider } from './auth/authContext';
import { MissionProvider } from './mission/missionContext';

function Provider({ children }) {
  return (
    <AuthProvider>
      <MissionProvider>{children}</MissionProvider>
    </AuthProvider>
  );
}

export default Provider;

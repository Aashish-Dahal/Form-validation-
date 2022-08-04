import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './lib/auth/AuthContext';
import {Screens} from './screens';
function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Screens />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;

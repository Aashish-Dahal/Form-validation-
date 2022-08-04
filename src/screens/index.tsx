import * as React from 'react';
import {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../lib/auth/AuthContext';
import {THEME} from '../theme';
import {Login} from './Login';
import {Register} from './Register';
import {Home} from './Home';

const Stack = createStackNavigator();
export const Screens = () => {
  const {loggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: THEME.colors.white,
        },
      }}>
      {!loggedIn ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

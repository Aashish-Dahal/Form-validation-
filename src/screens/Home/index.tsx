import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../../components/atoms/Button';
import {AuthContext} from '../../lib/auth/AuthContext';
export const Home = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <View style={styles.button}>
        <Button onPress={() => logout()} title="Logout" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: '50%',
  },
});

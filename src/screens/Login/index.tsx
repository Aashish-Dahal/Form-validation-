import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../../components/atoms/Button';
import {GradientBox} from '../../components/atoms/GradientBox';
import {TextInput} from '../../components/atoms/TextInput';
import {THEME} from '../../theme';
export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.position}>
        <GradientBox />
      </View>
      <Text style={[THEME.textTheme.largeHeaderText, {alignSelf: 'center'}]}>
        SIXTH SPARK
      </Text>
      <View style={styles.card}>
        <Text style={[THEME.textTheme.largeHeaderText, {alignSelf: 'center'}]}>
          SIGN IN
        </Text>
        <TextInput placeholder="Email address" />
        <TextInput placeholder="Password" />
        <Button onPress={() => {}} title="Login"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  card: {
    marginTop: 40,
    paddingVertical: 20,
    marginHorizontal: 60,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 10,
  },
  position: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});

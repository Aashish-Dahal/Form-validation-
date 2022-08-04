import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../../theme';

export interface ButtonProps {
  onPress: () => void;
  title?: String;
}
export const Button: React.FC<ButtonProps> = memo(({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={[THEME.colors.secondary, THEME.colors.primary]}
        start={{x: 0.7, y: 0.7}}>
        <Text style={THEME.textTheme.mediumHeaderText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  button: {
    elevation: 5,
    borderRadius: 20,
    height: 45,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

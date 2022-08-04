import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../../theme';

export interface GradientBoxProps {
  boxStyle?: StyleProp<ViewStyle>;
}

export const GradientBox: React.FC<GradientBoxProps> = () => {
  return (
    <LinearGradient
      colors={[THEME.colors.secondary, THEME.colors.primary]}
      start={{x: 0.7, y: 0.4}}
      style={[styles.boxDecoration]}
    />
  );
};
const styles = StyleSheet.create({
  boxDecoration: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
});

import {StyleSheet} from 'react-native';

const colors = {
  black: '#000000',
  text: '#333333',
  white: '#FFFFFF',
  gray: '#CCCCCC',
  graySix: '#666666',
  grayDark: '#999999',
  grayLight: '#f1f1f1',
  lightBlue: '#5894f7',
  primary: '#3986cc',
  secondary: '#613499',
};
const font = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_SIZE_EXTRA_LARGE: 20,
  FONT_WEIGHT_LIGHT: '200',
  FONT_WEIGHT_MEDIUM: '600',
  FONT_WEIGHT_HEAVY: '800',
} as const;
const textTheme = StyleSheet.create({
  largeButtonText: {
    fontSize: font.FONT_SIZE_LARGE,
    fontWeight: font.FONT_WEIGHT_HEAVY,
    fontFamily: 'Poppins-Bold',
  },
  largeHeaderText: {
    color: colors.black,
    fontWeight: font.FONT_WEIGHT_HEAVY,
    fontSize: font.FONT_SIZE_EXTRA_LARGE,
    fontFamily: 'Poppins-Bold',
  },
  mediumHeaderText: {
    fontSize: font.FONT_SIZE_MEDIUM,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
  },
});
export const THEME = {
  colors,
  textTheme,
};

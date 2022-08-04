import React, {memo} from 'react';
import {
  StyleSheet,
  TextInput as RNTextINput,
  TextInputProps as RNTextInputProps,
  Text,
} from 'react-native';
import {THEME} from '../../../theme';
interface TextInputProps {
  error?: any;
  errorMessage?: String;
}

export const TextInput: React.FC<TextInputProps & RNTextInputProps> = memo(
  ({error, errorMessage, ...props}) => {
    return (
      <>
        <RNTextINput {...props} style={styles.input} />
        {error && (
          <Text style={{color: 'red', marginLeft: 27, fontSize: 12}}>
            {errorMessage}
          </Text>
        )}
      </>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    height: 45,
    paddingLeft: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: THEME.colors.grayLight,
  },
});

import {Formik} from 'formik';
import * as yup from 'yup';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../../components/atoms/Button';
import {GradientBox} from '../../components/atoms/GradientBox';
import {TextInput} from '../../components/atoms/TextInput';
import {THEME} from '../../theme';
export const Login = () => {
  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
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
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email && touched.email}
                errorMessage={errors.email}
              />
              <TextInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password && touched.password}
                errorMessage={errors.password}
              />
              <Button onPress={handleSubmit} title="Login" />
            </>
          )}
        </Formik>
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

import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../../components/atoms/Button';
import {GradientBox} from '../../components/atoms/GradientBox';
import {TextInput} from '../../components/atoms/TextInput';
import {THEME} from '../../theme';
import {AuthContext} from '../../lib/auth/AuthContext';
export const Register = () => {
  const {register} = useContext(AuthContext);
  const registerValidationSchema = yup.object({
    username: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
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
          SIGN UP
        </Text>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: '',
            password: '',
            username: '',
            confirmPassword: '',
          }}
          onSubmit={values =>
            register(values.username, values.email, values.password)
          }>
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
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={errors.username && touched.username}
                errorMessage={errors.username}
              />
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
              <TextInput
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={errors.confirmPassword && touched.confirmPassword}
                errorMessage={errors.confirmPassword}
              />
              <Button onPress={handleSubmit} title="Register" />
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

import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Components
import LoginFormField from '../molecules/LoginFormField';
import ErrorMessage from '../atoms/ErrorMessage';
import SignUpContainer from '../molecules/SignUpContainer';
import LoginButtonContainer from '../molecules/LoginButtonContainer';
import RememberMeContainer from '../molecules/RememberMeContainer';

// Colors
import {Colors} from '../../../constants/Colors';

// Form Validation
import * as yup from 'yup';
import {Formik} from 'formik';

// User Context
import {UserContext} from '../../context/UserContext';

// Navigation
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {saveLoginState} from '../../config/asyncStorage';

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^ivaldi$/, 'Username is not correct, kindly contact Eng. Hatem')
    .required('Username is required'),
  password: yup
    .string()
    .matches(/^testtest$/, 'Password is not correct, kindly contact Eng. Hatem')
    .required('Password is required'),
});

type LoginFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginForm = ({navigation}: LoginFormProps) => {
  const [usernameFocused, setusernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const {user, setUser} = useContext(UserContext);

  const handleusernameFocusChange = (focused: boolean) => {
    setusernameFocused(focused);
  };

  const handlePasswordFocusChange = (focused: boolean) => {
    setPasswordFocused(focused);
  };

  let initialValues = {username: '', password: ''};

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={false}
      initialErrors={initialValues}
      validateOnChange={true}
      onSubmit={async values => {
        setUser({userName: values.username, mobileNumber: user.mobileNumber});
        await saveLoginState(true);
        navigation.replace('HomePage');
      }}
      validationSchema={loginValidationSchema}>
      {({errors, handleSubmit, handleChange, values, isValid}) => (
        <View style={styles.content}>
          <Text style={[styles.welcomeFont]}>Welcome to{'\n'}Mina Space</Text>
          <View>
            <LoginFormField
              type="username"
              focused={usernameFocused}
              onFocusChange={handleusernameFocusChange}
              onChangeText={handleChange('username')}
              value={values.username}
            />
            {errors.username && <ErrorMessage message={errors.username} />}
          </View>
          <View>
            <LoginFormField
              type="password"
              focused={passwordFocused}
              onFocusChange={handlePasswordFocusChange}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {errors.password && <ErrorMessage message={errors.password} />}
          </View>
          <RememberMeContainer />
          <LoginButtonContainer handleSubmit={handleSubmit} isValid={isValid} />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  content: {
    rowGap: 20,
    marginBottom: 20,
  },
  welcomeFont: {
    fontFamily: 'Gemunu Libre Bold',
    fontSize: 40,
    lineHeight: 45,
    marginBottom: 10,
    color: Colors.light.PureWhite,
  },
});

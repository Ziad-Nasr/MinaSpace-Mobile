import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import LoginPage from '../components/pages/LoginPage';
import SplashPage from '../components/pages/SplashPage';
import HomePage from '../components/pages/HomePage';
import SelectedMoviesScreen from '../components/screens/SelectedMovieScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Drawer: undefined;
  MobileNumber: undefined;
  HomePage: undefined;
  ConfirmationCode: {mobileNumber: string; title: string};
  Password: undefined;
  Success: undefined;
  SelectedMovie: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectedMovie"
        component={SelectedMoviesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

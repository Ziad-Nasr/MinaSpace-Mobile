/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './context/UserContext';
import {ThemeProvider} from './context/ThemeContext';
import MainStackNavigator from './navigation/MainStackNavigator';
import {
  clearLoginState,
  getLoginState,
  saveLoginState,
} from './config/asyncStorage';

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginState = async () => {
      const loggedIn = await getLoginState();
      setIsLoggedIn(loggedIn);
    };

    checkLoginState();
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer
          children={<MainStackNavigator />}></NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

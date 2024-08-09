import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Navigation
import {RootStackParamList} from '../../navigation/MainStackNavigator';

// Colors
import {Colors} from '../../../constants/Colors';

// Screens
import SplashScreen from '../screens/SplashScreen';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';
import {getLoginState} from '../../config/asyncStorage';

type SplashPageProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashPage = ({navigation}: SplashPageProps) => {
  const {theme} = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let activeColors = (Colors as any)[theme.mode];
  useEffect(() => {
    const checkLoginState = async () => {
      const loggedIn = await getLoginState();
      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        navigation.replace('HomePage');
      }
    };

    checkLoginState();
  }, [navigation]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: activeColors.MistyLavender,
      }}>
      <SplashScreen navigation={navigation} />
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

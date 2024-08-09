import React, {useEffect, useContext} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Colors
import {Colors} from '../../../constants/Colors';

// Navigation
import {RootStackParamList} from '../../navigation/MainStackNavigator';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  let commonStyle = {
    ...styles.container,
    backgroundColor: activeColors.MistyLavender,
  };

  return (
    <View style={commonStyle}>
      {/* <StatusBar backgroundColor={activeColors.MistyLavender} translucent /> */}

      <Image
        source={require('../../../assets/images/screens-logo.png')}
        resizeMode="contain"
        style={styles.logoStyle}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    width: 250,
    margin: 'auto',
  },
});

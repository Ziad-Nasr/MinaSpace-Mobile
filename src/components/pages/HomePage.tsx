import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';

// Navigation
import {RootStackParamList} from '../../navigation/MainStackNavigator';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

const HomePage = ({navigation}: HomePageProps) => {
  return <HomeScreen navigation={navigation} />;
};

export default HomePage;

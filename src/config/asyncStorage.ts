import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: {mode: string}) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch ({message}: any) {
    Alert.alert(message);
  }
};

export const fetchData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch ({message}: any) {
    Alert.alert(message);
  }
};

const LOGIN_KEY = 'user_login_state';

export const saveLoginState = async isLoggedIn => {
  try {
    await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(isLoggedIn));
  } catch (error) {
    console.error('Error saving login state', error);
  }
};

export const getLoginState = async () => {
  try {
    const loginState = await AsyncStorage.getItem(LOGIN_KEY);
    return loginState !== null ? JSON.parse(loginState) : false;
  } catch (error) {
    console.error('Error retrieving login state', error);
    return false;
  }
};

export const clearLoginState = async () => {
  try {
    await AsyncStorage.removeItem(LOGIN_KEY);
  } catch (error) {
    console.error('Error clearing login state', error);
  }
};

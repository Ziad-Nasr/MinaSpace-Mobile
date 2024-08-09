import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

// Colors
import {Colors} from '../../../constants/Colors';

type MoviesButtonsWrapperProps = {
  children: ReactNode;
  style: {};
};

const MoviesButtonsWrapper = ({children, style}: MoviesButtonsWrapperProps) => {
  return (
    <View style={[styles.MoviesButtonsWrapperContainer, style]}>
      {children}
    </View>
  );
};

export default MoviesButtonsWrapper;

const styles = StyleSheet.create({
  MoviesButtonsWrapperContainer: {
    flexDirection: 'row',
    shadowColor: Colors.MidnightBlack,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 15,
    height: 30,
    paddingHorizontal: 4,
  },
});

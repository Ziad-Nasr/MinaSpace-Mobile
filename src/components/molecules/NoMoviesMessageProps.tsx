import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Colors
import {Colors} from '../../../constants/Colors';

// Components
import AddMoviesButton from './AddMoviesButton';
import {ThemeContext} from '../../context/ThemeContext';

type NoMoviesMessageProps = {
  openForm: () => void;
};

const NoMoviesMessage = ({openForm}: NoMoviesMessageProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <View style={styles.noMoviesMessageContent}>
      <Image
        source={
          theme.mode === 'dark'
            ? require('../../../assets/images/dark-no-Movies.png')
            : require('../../../assets/images/no-Movies.png')
        }
        style={styles.noMoviesMessageImage}
      />
      <Text
        style={[
          styles.noMoviesMessageTitle,
          styles.centeredText,
          {color: activeColors.MidnightGray},
        ]}>
        No Movies
      </Text>
      <Text
        style={[
          styles.noMoviesMessageBody,
          styles.centeredText,
          {
            color: activeColors.DeepAmethyst,
          },
        ]}>
        You don’t have Movies, add some so you can send money
      </Text>
      <AddMoviesButton
        bgColor={activeColors.ForestGreen}
        textColor={activeColors.PureWhite}
        onPress={openForm}
      />
    </View>
  );
};

export default NoMoviesMessage;

const styles = StyleSheet.create({
  noMoviesMessageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoviesMessageImage: {
    marginVertical: 16,
  },
  noMoviesMessageTitle: {
    fontFamily: 'Roboto Medium',
    fontSize: 18,
    lineHeight: 21.09,
  },
  noMoviesMessageBody: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    lineHeight: 16.41,
    marginTop: 6,
    marginBottom: 14,
    marginHorizontal: 58,
  },
  centeredText: {
    textAlign: 'center',
  },
});

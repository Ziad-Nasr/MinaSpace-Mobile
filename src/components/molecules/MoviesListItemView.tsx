import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

// Components
import PropBasedIcon from '../atoms/PropBasedIcon';

// Colors
import {Colors} from '../../../constants/Colors';

// Navigation
import {Moviesy} from '../../navigation/MoviesStackNavigator';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type MoviesListItemViewProps = {
  MoviesyItem: Moviesy;
};

const MoviesListItemView = ({MoviesyItem}: MoviesListItemViewProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <Pressable
      style={[
        styles.MoviesListItemContainer,
        {
          backgroundColor: activeColors.PureWhite,
          shadowColor: activeColors.MidnightBlack,
        },
      ]}>
      <Image
        source={{uri: MoviesyItem.Poster}}
        style={[
          styles.MoviesListItemImage,
          {
            shadowColor: activeColors.MidnightBlack,
          },
        ]}
      />
      <View style={styles.MoviesListItemDetailsContainer}>
        <Text
          style={[
            styles.MoviesListItemName,
            {
              color: activeColors.DeepInk,
            },
          ]}>
          {MoviesyItem.Title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.MoviesListItemIconContainer,
              {
                backgroundColor: activeColors.MidnightBlack,
              },
            ]}>
            <PropBasedIcon
              name="phone-alt"
              component={FontAwesome5Icon}
              color={activeColors.SlateGrey}
              size={6}
            />
          </View>
          <Text
            style={[
              styles.MoviesListItemDetail,
              {
                color: activeColors.SlateGrey,
              },
            ]}>
            fffff
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.MoviesListItemIconContainer,
              {
                backgroundColor: activeColors.MidnightBlack,
              },
            ]}>
            <PropBasedIcon
              name="dollar-sign"
              component={FontAwesome5Icon}
              color={activeColors.SlateGrey}
              size={6}
            />
          </View>
          <Text
            style={[
              styles.MoviesListItemDetail,
              {
                color: activeColors.SlateGrey,
              },
            ]}>
            $802,828.61
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MoviesListItemView;

const styles = StyleSheet.create({
  MoviesListItemContainer: {
    flexDirection: 'row',
    borderRadius: 18,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 14,
    marginHorizontal: 1,
    marginVertical: 2,
  },
  MoviesListItemImage: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
    borderRadius: 8,
    width: 59,
    height: 59,
  },
  MoviesListItemDetailsContainer: {
    marginLeft: 10,
    rowGap: 4,
  },
  MoviesListItemName: {
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    lineHeight: 16.41,
  },
  MoviesListItemIconContainer: {
    width: 15,
    height: 15,
    borderRadius: 100,
    opacity: 0.09,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MoviesListItemDetail: {
    fontFamily: 'Roboto Regular',
    fontSize: 12,
    lineHeight: 14.06,
    marginLeft: 6,
  },
});

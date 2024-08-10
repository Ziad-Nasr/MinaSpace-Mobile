import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

// Colors
import {Colors} from '../../../constants/Colors';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';
import PropBasedIcon from '../atoms/PropBasedIcon';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import movieStore from '../../redux/store';

type MoviesListItemProps = {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
};

const MoviesListItem: React.FC<MoviesListItemProps> = observer(({movie}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  if (!movie) {
    return <Text>No movie data available</Text>;
  }

  return (
    <Pressable
      style={[
        styles.MoviesListItemContainer,
        {
          backgroundColor: activeColors.PureWhite,
          shadowColor: activeColors.MidnightBlack,
        },
      ]}
      onPress={() => movieStore.addMovie(movie)} // Add movie to the MobX store on press
    >
      <Image
        source={{uri: movie.Poster}}
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
          {movie.Title}
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
            Year {movie.Year}
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
            Type {movie.Type}
          </Text>
        </View>
      </View>
    </Pressable>
  );
});
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
export default MoviesListItem;

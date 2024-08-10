import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import movieStore from '../../redux/store';
// Colors
import {Colors} from '../../../constants/Colors';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';
import Toast from 'react-native-toast-message';

type MoviesGridItemProps = {
  image: any;
  firstName: string;
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
};

const MoviesGridItem: React.FC<MoviesGridItemProps> = observer(
  ({image, firstName, movie}) => {
    const {theme} = useContext(ThemeContext);
    let activeColors = (Colors as any)[theme.mode];
    console.log('image', image);

    const handleAdd = () => {
      movieStore.addMovie(movie);
    };

    return (
      <Pressable
        style={[
          styles.MoviesGridItemContainer,
          {
            backgroundColor: activeColors.PureWhite,
            shadowColor: activeColors.MidnightBlack,
          },
        ]}
        onPress={handleAdd} // Add movie to the MobX store on press
      >
        <Image source={{uri: image}} style={styles.MoviesGridItemImage} />
        <Text
          style={[
            styles.MoviesGridItemName,
            {
              color: activeColors.DeepInk,
            },
          ]}>
          {firstName}
        </Text>
      </Pressable>
    );
  },
);

export default MoviesGridItem;

const styles = StyleSheet.create({
  MoviesGridItemContainer: {
    borderRadius: 18,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 3,
    padding: 5,
    width: '48%',
  },
  MoviesGridItemImage: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
    width: 60,
    height: 60,
  },
  MoviesGridItemName: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 8,
  },
});

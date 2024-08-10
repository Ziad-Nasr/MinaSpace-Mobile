import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import movieStore from '../../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {Colors} from '../../../constants/Colors';
import PropBasedIcon from '../atoms/PropBasedIcon';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MoviesListItem from '../molecules/MoviesListItem';
import MoviesGridItem from '../molecules/MoviesGridItem';

type SelectedMoviesScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SelectedMovie'>;
};

const SelectedMoviesScreen: React.FC<SelectedMoviesScreenProps> = observer(
  ({navigation}) => {
    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(false);

    const handleBack = () => {
      navigation.goBack(); // Navigate back to the previous screen
    };

    const moviesList = movieStore.selectedMovie; // Get the selected movies from the MobX store

    let screenContent;
    if (moviesList.length === 0) {
      screenContent = (
        <View>
          <Text>Empty Movies List...check API Response</Text>
        </View>
      );
    } else {
      screenContent = (
        <View style={styles.screenContent}>
          {isSelectedStyleGrid ? (
            <FlatList
              contentContainerStyle={styles.MoviesGridList}
              data={moviesList}
              numColumns={2}
              keyExtractor={item => item.imdbID}
              renderItem={({item}) => (
                <MoviesGridItem
                  image={item.Poster}
                  firstName={item.Title}
                  movie={item} // Pass the full movie object here
                />
              )}
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.MoviesList}
              data={moviesList}
              keyExtractor={item => item.imdbID}
              renderItem={({item}) => <MoviesListItem movie={item} />}
            />
          )}
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.selectedMoviesView}>
          <TouchableOpacity
            style={styles.selectedMoviesbtn}
            onPress={handleBack}>
            <PropBasedIcon
              color={Colors.PureWhite}
              component={FontAwesome5Icon}
              name={'arrow-left'}
              size={20}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Selected Movies</Text>
        </View>
        {screenContent}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  toggleViewBtn: {
    padding: 10,
  },
  screenContent: {
    flex: 1,
    marginTop: 20,
  },
  MoviesGridList: {
    rowGap: 8,
    justifyContent: 'center',
    padding: 1,
  },
  MoviesList: {
    rowGap: 10,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  selectedMoviesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedMoviesbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.MidnightBlack,
    borderRadius: 4,
  },
  selectedMoviesText: {
    color: Colors.PureWhite,
    marginRight: 8,
  },
  movieItem: {
    marginBottom: 10,
  },
});

export default SelectedMoviesScreen;

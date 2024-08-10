import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import movieStore from '../../redux/store';

const SelectedMoviesScreen: React.FC = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selected Movies</Text>
      <FlatList
        data={movieStore.selectedMovie}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => (
          <View style={styles.movieItem}>
            <Text>
              {item.Title} ({item.Year})
            </Text>
          </View>
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieItem: {
    marginBottom: 10,
  },
});

export default SelectedMoviesScreen;

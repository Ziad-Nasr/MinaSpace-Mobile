import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Components
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import PropBasedIcon from '../atoms/PropBasedIcon';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Data
import {Colors} from '../../../constants/Colors';
import MoviesGridItem from '../molecules/MoviesGridItem';
import MoviesListItem from '../molecules/MoviesListItem';
import TabScreenWrapper from '../organisms/TabScreenWrapper';
import MoviesListHeader from '../organisms/MoviesListHeader';
import {clearLoginState} from '../../config/asyncStorage';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=car&apikey=6a0c7659')
      .then(response => response.json())
      .then(json => {
        setMoviesList(json.Search);
        console.log('first', json.Search);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await clearLoginState();
    navigation.replace('Login');
  };

  let screenContent;
  if (moviesList?.length === 0) {
    screenContent = (
      <View>
        <Text>Empty Movies List...check API Response</Text>
      </View>
    );
  } else {
    screenContent = (
      <View style={styles.screenContent}>
        {isSelectedStyleGrid && (
          <FlatList
            contentContainerStyle={styles.MoviesGridList}
            data={moviesList}
            numColumns={2}
            keyExtractor={item => item.imdbID}
            renderItem={({item}) => (
              <MoviesGridItem image={item.Poster} firstName={item.Title} />
            )}
          />
        )}
        {!isSelectedStyleGrid && (
          <FlatList
            contentContainerStyle={styles.MoviesList}
            data={moviesList}
            keyExtractor={item => item.imdbID}
            renderItem={({item}) => <MoviesListItem MoviesyItem={item} />}
          />
        )}
      </View>
    );
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.flexed}>
        <Text style={styles.bigT}>Home</Text>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => handleLogout()}>
          <Text style={styles.logoutText}>Logout</Text>
          <PropBasedIcon
            color={Colors.GrayishSilver}
            component={FontAwesomeIcon}
            name={'sign-out'}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <TabScreenWrapper
        showNotificationButton={false}
        onBack={() => {}}
        showTabHeader={false}
        style={styles.MoviesListContainer}
        isStatusBarTransparent={false}>
        <MoviesListHeader
          isSelectedStyleGrid={isSelectedStyleGrid}
          setListStyle={() => setIsSelectedStyleGrid(false)}
          setGridStyle={() => setIsSelectedStyleGrid(true)}
        />
        {screenContent}
      </TabScreenWrapper>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 26,
    paddingVertical: 16,
    flex: 1,
  },
  bigT: {
    fontSize: 22,
  },
  logoutBtn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#ddd',
    flexDirection: 'row',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 7,
    color: Colors.GrayishSilver,
  },
  MoviesListContainer: {
    paddingHorizontal: 25,
    paddingVertical: 16,
    flex: 1,
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
  flexed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

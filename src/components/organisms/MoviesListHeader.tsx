import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

// Colors
import {Colors} from '../../../constants/Colors';

// Components
import AddMoviesButton from '../molecules/AddMoviesButton';
import MoviesListStyleButtons from './MoviesListStyleButtons';
import BoldTitle from '../atoms/BoldTitle';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type MoviesListHeaderProps = {
  isSelectedStyleGrid: boolean;
  setListStyle: () => void;
  setGridStyle: () => void;
};

const MoviesListHeader = ({
  isSelectedStyleGrid,
  setListStyle,
  setGridStyle,
}: MoviesListHeaderProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <View style={styles.MoviesListHeader}>
      <BoldTitle title="Movies List" color={activeColors.DeepInk} />
      <View style={styles.MoviesListContent}>
        <MoviesListStyleButtons
          isSelectedStyleGrid={isSelectedStyleGrid}
          setGridStyle={setGridStyle}
          setListStyle={setListStyle}
        />
      </View>
    </View>
  );
};

export default MoviesListHeader;

const styles = StyleSheet.create({
  MoviesListHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MoviesListContent: {
    flexDirection: 'row',
    columnGap: 8,
  },
});

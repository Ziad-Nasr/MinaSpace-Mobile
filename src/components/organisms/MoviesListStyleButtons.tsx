import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

// Components
import ListStyleButton from '../atoms/ListStyleButton';
import MoviesButtonsWrapper from '../molecules/MoviesButtonsWrapper';

// Colors
import {Colors} from '../../../constants/Colors';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';

type MoviesListStyleButtonsProps = {
  isSelectedStyleGrid: boolean;
  setListStyle: () => void;
  setGridStyle: () => void;
};

const MoviesListStyleButtons = ({
  isSelectedStyleGrid,
  setListStyle,
  setGridStyle,
}: MoviesListStyleButtonsProps) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = (Colors as any)[theme.mode];

  return (
    <MoviesButtonsWrapper
      style={[
        styles.MoviesListButtonsWrapper,
        {backgroundColor: activeColors.PureWhite},
      ]}>
      <ListStyleButton
        iconName="th-large"
        isSelected={isSelectedStyleGrid}
        onPress={setGridStyle}
      />
      <ListStyleButton
        iconName="list"
        isSelected={!isSelectedStyleGrid}
        onPress={setListStyle}
      />
    </MoviesButtonsWrapper>
  );
};

export default MoviesListStyleButtons;

const styles = StyleSheet.create({
  MoviesListButtonsWrapper: {
    columnGap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

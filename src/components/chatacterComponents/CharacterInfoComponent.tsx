import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {colors, fontWeight} from '../../theme/styles';
import {useDataFetch} from '../../hooks/useDataFetching';
import {ErrorMessage, Loading} from '../../theme/infoMessages';

export const CharacterInfoComponent = () => {
  const character: any = useSelector<RootState>(state => state.characterItem);

  const getAddress = character.homeworld[character.homeworld.length - 2];
  const getSpecies = character.species[0][character.species[0].length - 2];

  const {
    response: planetResponse,
    isLoading: planetIsLoading,
    isError: planetIsError,
  } = useDataFetch(`planets/${getAddress}`);
  const {
    response: speciesResponse,
    isLoading: speciesIsLoading,
    isError: speciesIsError,
  } = useDataFetch(`species/${getSpecies}`);

  if (
    planetIsLoading ||
    speciesIsLoading ||
    !planetResponse ||
    !speciesResponse
  ) {
    return <Loading />;
  }

  if (planetIsError || speciesIsError) {
    return <ErrorMessage />;
  }

  if (planetIsError || speciesIsError) {
    return <ErrorMessage />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{character.name}</Text>
      </View>

      <View style={[styles.infoCart]}>
        <Text style={styles.about}>Birth year</Text>
        <Text>{character.birth_year}</Text>
      </View>

      <View style={styles.infoCart}>
        <Text style={styles.about}>Gender</Text>
        <Text>{character.gender}</Text>
      </View>

      <View style={styles.infoCart}>
        <Text style={styles.about}>Home World</Text>
        <Text>{planetResponse.name}</Text>
      </View>

      <View style={styles.infoCart}>
        <Text style={styles.about}>Species</Text>
        <Text>{speciesResponse.species}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  character: state.characterItem.character,
});

export default connect(mapStateToProps)(CharacterInfoComponent);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  titleContainer: {
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    shadowColor: colors.bordersBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    width: '100%',
    marginVertical: 20,
    height: Dimensions.get('screen').height * 0.15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: fontWeight.medium,
    margin: 'auto',
  },
  infoCart: {
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    shadowColor: colors.bordersBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 12,
  },
  about: {
    fontSize: 20,
    color: colors.niceGray,
    fontWeight: fontWeight.normal,
  },
  info: {
    fontSize: 20,
    color: colors.grey,
    fontWeight: fontWeight.normal,
  },
  AddToFavourities: {
    alignContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    shadowColor: colors.bordersBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    width: '100%',
    marginTop: 25,
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 12,
  },
  AddToFavouritiesText: {
    fontSize: 25,
    color: colors.grey,
    fontWeight: fontWeight.medium,
  },
});

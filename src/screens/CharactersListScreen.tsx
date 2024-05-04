import React, { useEffect, useState } from "react";
import {  FlatList, StyleSheet } from "react-native";
import { useDataFetch } from "../hooks/useDataFetching";
import { Loading, ErrorMessage } from "../theme/infoMessages";
import { StatisticLogicComponent } from "../components/statisticComponents/StatisticLogicComponent";
import CharacterComponent from "../components/chatacterComponents/CharacterComponent";
import _ from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/styles";

export const CharactersListScreen = () => {
  const { response, isLoading, isError } = useDataFetch("people");
  const [favouriteCharacters, setFavouriteCharacters] = useState([]);
  const [genderAmount, setGenderAmount] = useState({
    maleAmount: 0,
    femaleAmount: 0,
    otherAmount: 0,
  });

  useEffect(() => {
    if (response) {
      setFavouriteCharacters(_.cloneDeep(response.results));
    }
  }, [response]);

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading || !response) {
    return <Loading />;
  }

  favouriteCharacters.forEach((character: { favourite: any; gender: string; }) => {
    if (character.favourite) {
      if (character.gender === "male") {
        genderAmount.maleAmount++;
      } else if (character.gender === "female") {
        genderAmount.femaleAmount++;
      } else {
        genderAmount.otherAmount++;
      }
    }
  });

  const toggleFavourite = (character: any) => {
    if (favouriteCharacters.includes(character)) {
      setFavouriteCharacters(favouriteCharacters.filter((char: any) => char !== character));
    } else {
      setFavouriteCharacters([...favouriteCharacters, character]);
    }
  };
  
  
  const cleanFavourites = () => {
    const cleanedCharacters = favouriteCharacters.map((char) => ({
      ...char,
      favourite: false,
    }));

    ;

    setGenderAmount({
      maleAmount: 0,
      femaleAmount: 0,
      otherAmount: 0,
    });

    setFavouriteCharacters(cleanedCharacters)
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={
          <StatisticLogicComponent
            maleAmount={genderAmount.maleAmount}
            femaleAmount={genderAmount.femaleAmount}
            otherAmount={genderAmount.otherAmount}
            cleanFavourites={() => cleanFavourites()}
          />
        }
        data={favouriteCharacters}
        renderItem={({ item }: any) => (
          <CharacterComponent
            item={item}
            toggleFavourite={toggleFavourite}
          />
        )}
        keyExtractor={(item) => item.created}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
});

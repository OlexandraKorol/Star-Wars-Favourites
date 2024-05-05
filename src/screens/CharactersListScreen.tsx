import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDataFetch } from "../hooks/useDataFetching";
import { Loading, ErrorMessage } from "../theme/infoMessages";
import { StatisticLogicComponent } from "../components/statisticComponents/StatisticLogicComponent";
import CharacterComponent from "../components/chatacterComponents/CharacterComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/styles";
import _ from "lodash";

export const CharactersListScreen = () => {
  const { response, isLoading, isError } = useDataFetch("people");
  const [favouriteCharacters, setFavouriteCharacters] = useState([]);
  const [genderAmount, setGenderAmount] = useState({
    male: 0,
    female: 0,
    other: 0,
  });

  useEffect(() => {
    if (response && response.results) {
      const responsCopy = _.cloneDeep(response.results)

      responsCopy.forEach(element => {
        element.favourite = false
      });
      setFavouriteCharacters(responsCopy);
    }
  }, [response]);

  const updateGenderCounts = (character: { favourite: any; gender: any; }) => {
    if (!character) return; 
  
    setGenderAmount(prevState => {
      const { favourite, gender } = character;
      const newState = { ...prevState };
  
      if (favourite) {
        newState[gender === "n/a" ? "other" : gender] = (newState[gender === "n/a" ? "other" : gender] || 0) + 1;
      } else {
        newState[gender === "n/a" ? "other" : gender] = (newState[gender === "n/a" ? "other" : gender] || 0) - 1;
      }
      return newState;
    });
  };
  

  const toggleFavourite = (character) => {  
    updateGenderCounts(character);
  };

  const cleanFavourites = () => {
    const cleanedCharacters = favouriteCharacters.map((char: any) => ({
      ...char,
      favourite: false,
    }));

    setFavouriteCharacters(cleanedCharacters);    

    setGenderAmount({
      male: 0,
      female: 0,
      other: 0,
    });
  };

  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading || !response) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={favouriteCharacters}
        renderItem={({ item }) => (
          <CharacterComponent
            item={item}
            toggleFavourite={() => toggleFavourite(item)}
          />
        )}
        ListHeaderComponent={
          <StatisticLogicComponent
            male={genderAmount.male}
            female={genderAmount.female}
            other={genderAmount.other}
            cleanFavourites={cleanFavourites}
          />
        }
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
})

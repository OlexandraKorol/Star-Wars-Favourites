import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { useDataFetch } from "../hooks/useDataFetching";
import { Loading, ErrorMessage } from "../theme/infoMessages";
import { colors } from "../theme/styles";
import { StatisticLogicComponent } from "../components/statisticComponents/StatisticLogicComponent";
import CharacterComponent from "../components/chatacterComponents/CharacterComponent";

export const CharactersListScreen = () => {
  const { response, isLoading, isError } = useDataFetch("people");
  const [favouriteCharacters, setFavouriteCharacters] = useState<any>([]);
  const [displayMode] = useState("all"); 

  if (isError) {    
    return <ErrorMessage />;
  }

  if (isLoading || !response) {
    return <Loading />;
  }

  let maleAmount = 0;
  let femaleAmount = 0;
  let otherAmount = 0;

  const filteredCharacters = displayMode === "all" 
    ? response.results 
    : displayMode === "favourites" 
      ? favouriteCharacters 
      : response.results.filter((character: any) => !favouriteCharacters.includes(character));

  filteredCharacters.forEach((character: { favourite: any; gender: string; }) => {
    if (character.favourite) {
      if (character.gender === "male") {
        maleAmount++;
      } else if (character.gender === "female") {
        femaleAmount++;
      } else {
        otherAmount++;
      }
    }
  });

  const toggleFavourite = (character: any) => {
    if (favouriteCharacters.includes(character)) {
      setFavouriteCharacters(favouriteCharacters.filter((char: any) => char !== character));
    } else {
      setFavouriteCharacters([...favouriteCharacters, character]);
    }

    if (setFavouriteCharacters.length == 0) {
      setFavouriteCharacters([])
    }
  };

  const cleanFavourites = () => {
    const cleanedCharacters = filteredCharacters.map((character: any) => ({
      ...character,
      favourite: false
    }));
    setFavouriteCharacters(cleanedCharacters);
  };


  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={
          <StatisticLogicComponent
            maleAmount={maleAmount}
            femaleAmount={femaleAmount}
            otherAmount={otherAmount}
            cleanFavourites={cleanFavourites} 
            />
        }
        data={filteredCharacters}
        renderItem={({item}) => 
          <CharacterComponent 
          item={item} 
          toggleFavourite={toggleFavourite}
          />}
        keyExtractor={(item) => item.created}
        showsVerticalScrollIndicator={false}
      /> 
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
});


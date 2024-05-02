import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { CharacterComponent } from "../components/CharacterComponent";
import { useDataFetch } from "../hooks/useDataFetching";
import { Loading, ErrorMessage } from "../theme/infoMessages";
import { colors } from "../theme/styles";

export const CharactersListScreen = () => {
  const { response, isLoading, isError } = useDataFetch("people");

  if (isLoading || !response) {
    return <Loading />;
  }

  if (isError) {    
    return <ErrorMessage />;
  }

  return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.wrapper}>
        <FlatList
          data={response.results}
          renderItem={({item}) => <CharacterComponent item={item} />}
          keyExtractor={(item) => item.name} 
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: colors.debugColorAquamarine, margin: 0}}
        /> 
      </SafeAreaView> 
      )
    }

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.debugColorIndigo,
    flex: 1,
    paddingHorizontal: 20,
    margin: 0

  }
})
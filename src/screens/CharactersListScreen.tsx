import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, View } from "react-native";
import { CharacterComponent } from "../components/CharacterComponent";
import { useDataFetch } from "../hooks/useDataFetching";
import { Loading, ErrorMessage } from "../theme/infoMessages";
import { colors } from "../theme/styles";
import { StatisticCardComponent } from "../components/StatisticCardComponent";
import { StatisticLogicComponent } from "../components/StatisticLogicComponent";

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
          ListHeaderComponent={StatisticLogicComponent}
          data={response.results}
          renderItem={({item}) => <CharacterComponent item={item} />}
          keyExtractor={(item) => item.created}
          showsVerticalScrollIndicator={false}
        /> 
      </SafeAreaView> 
      )
    }

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  stastisticComponent:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',marginVertical: 30
  }
})
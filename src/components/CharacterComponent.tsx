import { View, Text } from "react-native";

export const CharacterComponent = ({item}: any) => {
  return (
    <View style={{width: '100%'}}>
      <Text>{item.birth_year}</Text>
    </View>
  );
};
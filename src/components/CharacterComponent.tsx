import { View, Text, StyleSheet } from "react-native";
export const CharacterComponent = ({item}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgba(0, 0, 0, 0.87)',
      borderRadius: 4,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
      width: '100%',
      height: 52,
      marginBottom: 20,
    },
    text: {
    }
})
import { View, Text, StyleSheet } from "react-native";
import HeartIcon from 'react-native-vector-icons/AntDesign';
import { colors, fontWeight } from "../theme/styles";
import { useState } from "react";


export const CharacterComponent = ({item}: any) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <View style={styles.wrapper}>
      <HeartIcon 
        name={isClicked ? "heart" : "hearto"} 
        size={30} 
        color={isClicked ?  colors.red : colors.grey}
        onPress={() => setIsClicked(!isClicked)}
        style={{marginRight: 25}}
        />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
      color: colors.black,
      borderRadius: 4,
      shadowColor: colors.bordersBlack,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
      width: '100%',
      height: 52,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text: {
      fontWeight: fontWeight.normal,
      fontSize: 20,
    }
})
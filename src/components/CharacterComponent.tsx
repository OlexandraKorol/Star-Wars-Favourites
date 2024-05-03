import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeartIcon from 'react-native-vector-icons/AntDesign';
import { colors, fontWeight } from "../theme/styles";
import { useState } from "react";
import {connect, useDispatch,} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { actions } from "../features/charactersItem";


export const CharacterComponent = ({item}: any) => {
  const [isClicked, setIsClicked] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();


  const onCartComponentClick = () => {
    dispatch(actions.show(item))
    navigation.navigate('Character');
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onCartComponentClick}>
      <HeartIcon 
        name={isClicked ? "heart" : "hearto"} 
        size={30} 
        color={isClicked ?  colors.red : colors.grey}
        onPress={() => setIsClicked(!isClicked)}
        style={{marginRight: 25}}
        />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.characterItem.character,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComponent);

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
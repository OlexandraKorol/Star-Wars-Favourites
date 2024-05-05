import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import {colors, fontWeight} from '../../theme/styles';
import {connect, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {actions} from '../../features/charactersItem';
import {useEffect, useState} from 'react';

interface CharacterComponentProps {
  item: any;
  toggleFavourite: (character: any) => void;
}

export const CharacterComponent = ({
  item,
  toggleFavourite,
}: CharacterComponentProps) => {
  const navigation = useNavigation<any>();
  const [isFavourite, setIsFavourite] = useState(item.favourite);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavourite(item.favourite);
  }, [item.favourite]);

  const onCartComponentClick = () => {
    dispatch(actions.show(item));
    navigation.navigate('Character');
  };

  const onToggleFavourite = () => {
    setIsFavourite(!isFavourite);
    item.favourite = !isFavourite;
    toggleFavourite(item);
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onCartComponentClick}>
      <HeartIcon
        name={isFavourite ? 'heart' : 'hearto'}
        size={30}
        color={isFavourite ? colors.red : colors.grey}
        onPress={onToggleFavourite}
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
    shadowOffset: {width: 0, height: 2},
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
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CharacterInfoComponent} from '../components/chatacterComponents/CharacterInfoComponent';
import {colors} from '../theme/styles';
import {CustomBackButton} from '../components/CustomBackButton';

export const CharacterScreenOptions = {
  headerShown: true,
  title: 'Character Info',
  headerBackTitle: '',
  headerLeft: () => <CustomBackButton />,
};

export const CharacterScreen = () => {
  return (
    <View style={styles.wrapper}>
      <CharacterInfoComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
});

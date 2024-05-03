import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CharacterInfoComponent from '../components/CharacterInfoComponent'

export const CharacterScreen = () => {
  return (
    <View style={styles.wrapper}>
      <CharacterInfoComponent/>
    </View>
  )}


const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
})
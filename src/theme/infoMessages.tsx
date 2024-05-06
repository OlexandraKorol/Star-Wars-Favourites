import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './styles'


export const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  )
}


export const ErrorMessage = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>UPS!</Text>
      <Text style={styles.subTitle}>Something went srong...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.grey,
    fontSize: 40
  },
  subTitle: {
    color: colors.niceGray,
    fontSize: 20
  }
})
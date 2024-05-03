import { StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import { colors, fontWeight } from '../theme/styles';

interface StatisticCardComponentProps {
  gender: string,
  amount: number
}

export const StatisticCardComponent = ({gender, amount}:StatisticCardComponentProps) => {
  return (
      <Surface style={styles.surface} elevation={1}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.gender}>{gender}</Text>
      </Surface>
    );
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 52,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal:3
  },
  amount: {
    fontSize: 20,
    color: colors.niceGray,
    fontWeight: fontWeight.medium,
    marginTop: 4
    
  },
  gender: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 4
  }
})
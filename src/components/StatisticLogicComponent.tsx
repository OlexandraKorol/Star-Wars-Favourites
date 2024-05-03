import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatisticCardComponent } from './StatisticCardComponent';
import { Button, Text } from 'react-native-paper';
import { colors, fontWeight } from '../theme/styles';

interface StatisticLogicComponentProps {
  maleAmount: number,
  femaleAmount: number,
  otherAmount: number,
  cleanFavourites: () => void
}

export const StatisticLogicComponent = ({
  maleAmount, 
  femaleAmount, 
  otherAmount,
  cleanFavourites
}: StatisticLogicComponentProps) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Fans
        </Text>

        <Button 
          onPress={() => cleanFavourites()}
          mode="contained" 
          elevation={1} 
          style={styles.buttonStyle}
          textColor={colors.red}
        >
          CLEAN FANS
        </Button>
      </View>

      <View style={styles.stastisticComponent}>
        <StatisticCardComponent gender={"Male"} amount={maleAmount} />
        <StatisticCardComponent gender={"Female"} amount={femaleAmount} />
        <StatisticCardComponent gender={"Other"} amount={otherAmount} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: fontWeight.thin
  },
  stastisticComponent:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 30
  },
  buttonStyle: {
    backgroundColor: colors.white, 
    borderColor: colors.red, 
    borderWidth: 1, 
    width: '40%',
    borderRadius: 4
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
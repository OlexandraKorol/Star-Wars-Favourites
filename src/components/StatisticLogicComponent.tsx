import { StyleSheet, View } from 'react-native'
import React from 'react'
import { StatisticCardComponent } from './StatisticCardComponent'
import { Button, Text } from 'react-native-paper';
import { colors, fontWeight } from '../theme/styles';


export const StatisticLogicComponent = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Fans
        </Text>

        <Button 
          onPress={() => {}} 
          mode="contained" 
          elevation={1} 
          style={styles.buttonStyle}
          textColor={colors.red}
        >
          CLEAN FANS
        </Button>
      </View>

       <View style={styles.stastisticComponent}>
          <StatisticCardComponent gender={"Male"} amount={0} />
          <StatisticCardComponent gender={"Feale"} amount={0} />
          <StatisticCardComponent gender={"Other"} amount={0} />
        </View>
    </View>
  )
}
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
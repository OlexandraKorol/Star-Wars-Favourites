import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersListScreen } from '../screens/CharactersListScreen';
import { CharacterScreen, CharacterScreenOptions } from '../screens/CharacterScreen';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Peoples" 
          component={CharactersListScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Character" 
          component={CharacterScreen} 
          options={CharacterScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/styles'
import IconBack from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export const CustomBackButton = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={{ paddingHorizontal: 16}} onPress={() => navigation.goBack()}>
        <Text>
          <IconBack name="left" size={20} color={colors.niceGray} />
        </Text>
    </TouchableOpacity>
  )
}


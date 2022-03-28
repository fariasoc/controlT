import React from 'react'
import { 
  View, 
  Text, 
  Button, 
  TextInput, 
} from 'react-native'

import { styles } from './styles'

export function Login(){
  return(
    <View style={styles.container}>
      <Text style={{color: 'white' }} > Login </Text>
    </View>
  )
}
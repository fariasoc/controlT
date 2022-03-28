import React from 'react';
import { styles } from './styles';
import { 
  View, 
  Text,
  Button
} from 'react-native'

import auth from '@react-native-firebase/auth'

export function Home(){
  return (
    <View style={styles.container} >
      <Text> Home </Text>
      <Button title="sair" onPress={() => auth().signOut()} />
    </View>
  )
}
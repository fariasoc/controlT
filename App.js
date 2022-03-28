import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/pages/Login'
import { colors } from './src/styles'
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading'
export default function App() {

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular, 
    JosefinSans_700Bold
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (  
    <>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle='light-content'
      />
      <Login/>
    </>
    
  );
}

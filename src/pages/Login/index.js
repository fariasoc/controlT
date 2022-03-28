import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import { colors, fonts } from '../../styles'

import { styles } from './styles'

export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)


  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/icon.png')}
        style={styles.imageLogo}
      />

      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
      />

      <View style={styles.containerInputPassword} >
        <TextInput
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.inputPassword}
          placeholder='Senha'
          placeholderTextColor={colors.PLACEHOLDER_TEXT_COLOR}
          secureTextEntry={!passwordIsVisible}
        />

        <TouchableOpacity
          onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          <Feather
            name="eye"
            size={20}
            color={colors.PLACEHOLDER_TEXT_COLOR}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.TextResetPassword} > Esqueceu a senha? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButtonLogin} > 
        <Text style={styles.textButtonLogin}> ENTRAR </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.TextResetPassword} > Criar uma conta </Text>
      </TouchableOpacity>
    </View>



  )
}
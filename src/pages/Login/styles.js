import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND
  }, 
  imageLogo:{
    width:150,
    height:150
  },
  input: {
    borderWidth: 1, 
    borderColor: colors.PLACEHOLDER_TEXT_COLOR,
    borderRadius: 7,
    width: '80%',
    height: 50,
    fontFamily: fonts.REGULAR, 
    padding: 10, 
    fontSize: 18,
    color: colors.PLACEHOLDER_TEXT_COLOR,
  },
  containerInputPassword: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1, 
    borderColor: colors.PLACEHOLDER_TEXT_COLOR,
    borderRadius: 7,
    flexDirection: 'row',
    marginTop: 20,
  }, 
  inputPassword: {
    fontFamily: fonts.REGULAR, 
    flex:1,
    fontSize: 18,
    color: colors.PLACEHOLDER_TEXT_COLOR,
  }, 
  TextResetPassword: {
    color: colors.PLACEHOLDER_TEXT_COLOR,
    fontSize: 16,
    marginTop: 5 
  }, 
  containerButtonLogin: {
    width: '80%',
    height: 50,
    backgroundColor: colors.PLACEHOLDER_TEXT_COLOR,
    borderRadius: 7,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.REGULAR, 
  }, 
  textButtonLogin: {
    color: colors.BACKGROUND,
    fontFamily: fonts.BOLD,
    fontSize: 18, 
  }
})
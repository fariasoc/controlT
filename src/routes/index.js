import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export function Routes() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) return null
  /*
  
  if (!user) {
    return (
      <Login/>
    );
  }

  */

  return (
    !user ? <Login/> :  <Home/>
  )
}
import React from 'react'
import { Platform } from 'react-native'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../../core/theme'

export default function Background({ source, children }) {
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"} enabled={false}>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
  },
  container: {
    padding: 0,
    width: '100%',
    maxWidth: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

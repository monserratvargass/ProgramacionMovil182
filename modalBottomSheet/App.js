import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Prueba from './screens/prueba';


export default function App() {

  return (
    
    <Prueba/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

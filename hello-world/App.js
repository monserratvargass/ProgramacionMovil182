//Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, Dimensions } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de estado de los componentes


//Existen componentes, area donde se va a ejecutar
export default function App() {

  const[text, setText]=useState('Valor default')

  const[submit, setSubmit]=useState('')


  return (

    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>

      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>
      <Text> Componente TextInput:{submit} </Text>

      <TextInput style={styles.input} placeholder='Ingresa tu nombre' onChangeText={(t)=>setText(t)} value={text}/>

      <Button title='Presioname' onPress={()=>{ setSubmit(text); alert('Texto enviado') } }/> {/* Funcion anonima */}
      
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

//Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: 'blue',
  },

  scrollView: {
    width: Dimensions.get('window').width
  },

});

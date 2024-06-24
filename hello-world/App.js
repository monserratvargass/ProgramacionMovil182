//Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de estado de los componentes


//Existen componentes, area donde se va a ejecutar
export default function App() {

  return (

    <View style={styles.container}>

      <FlatList data={[{key:1,name:'Ivan Isay'},
        {key:2,name:'Maya'},
        {key:3,name:'Lili'},
        {key:4,name:'Monse'},
        {key:5,name:'Alan'},
        {key:6,name:'Diego'},
        {key:7,name:'Isabel'},
        {key:8,name:'Isabel'},
        {key:9,name:'Isabel'},
        {key:10,name:'Isabel'},
        {key:11,name:'Isabel'},
        {key:12,name:'Isabel'},
        {key:13,name:'Isabel'},
        {key:14,name:'Isabel'},
        {key:15,name:'Isabel'},
        {key:16,name:'Isabel'},
        {key:17,name:'Isabel'},
        {key:18,name:'Isabel'},
        {key:19,name:'Isabel'},
        {key:20,name:'Isabel'},
        {key:21,name:'Isabel'},
      ]}
      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      />

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
    alignItems: 'strecht',
    justifyContent: 'center',
    paddingTop: 60,
  },

  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1
  },

});

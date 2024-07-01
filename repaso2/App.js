import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, FlatList, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState([
    { key: 1, titulo: 'Intensamente 2' },
    { key: 2, titulo: 'Rapidos y Furiosos' },
    { key: 3, titulo: 'Bad Boys' },
    { key: 4, titulo: 'Diario de una Pasion' },
    { key: 5, titulo: 'Avengers' },
    { key: 6, titulo: 'Coraline y la Puerta Secreta' },
    { key: 7, titulo: 'Parasitos' },
  ]);

  const guardar = () => {
    if (titulo.trim() === '') {
      Alert.alert('Sin resultados', 'No existen coincidencias en la lista');
      return;
    }
  };

  const renderizar = ({ item }) => (
    <Text style={styles.item}>{item.titulo}</Text>
  );

  const filteredData = data.filter(item =>
    item.titulo.toLowerCase().includes(titulo.toLowerCase())
  );

  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.background}>
      <Text style={styles.titulo}>Buscador de Películas</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Ingresa el Título de la Película'
            onChangeText={setTitulo}
            value={titulo}
          />
          <Button
            onPress={guardar}
            title='BUSCAR'
            color='blue'
          />
        </View>
        <FlatList
          data={titulo.trim() === '' ? data : filteredData}
          renderItem={renderizar}
          keyExtractor={item => item.key.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    width: '100%',
    height: 45,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 90,
  },
  item: {
    padding: 10,
    borderColor: 'blue',
    color: 'white',
    fontSize: 25,
  },
});

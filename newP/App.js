import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const alerta = () => {
    Alert.alert(
      'Formulario enviado',
      `Nombre: ${nombre}\nEmail: ${email}\nContraseña: ${contrasena}`,
      [
        { text: 'OK', onPress: () => console.log('Alerta cerrada') }
      ]
    );
  };

  return (
    <ImageBackground style={styles.imageBackground} source={require('./assets/images/tristeza.jpg')}>
    <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.cardContent}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingresa tu nombre"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
      />

      <Button title="Guardar" onPress={alerta} />
      </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // o 'contain' según tus preferencias
    justifyContent: 'center', // opcional: alinea el contenido
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // elevación para sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
  },
  cardContent: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default Formulario;



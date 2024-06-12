//Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de estado

const Texto=()=>{ /* Parametros */
  const[contenido, setContenido] = useState('holaMundo') /* Variable de contenido (propiedad children), se u */
  const actualizarContenido=()=>{/* Array function que va a permitir hacer esa actualizacion */
    setContenido('State actualizó este texto')
  } 
  return(<Text onPress={actualizarContenido}>{contenido}</Text>) /* Mandar llamar el evento */
}

const Boton=()=>{ /* Parametros */
  const[contenido, setContenido] = useState('Presioname') /* Variable de contenido (propiedad children), se u */
  const actualizarContenido=()=>{/* Array function que va a permitir hacer esa actualizacion */
    setContenido('State actualizó este boton')
  } 
  return(<Button title={contenido} color="#000000" onPress={actualizarContenido}>{contenido}</Button>) /* Mandar llamar el evento */
}

//Existen componentes, area donde se va a ejecutar
export default function App() {
  return (

    <View style={styles.container}>

      {/* Dinamico la asignacion del texto */}
      <Texto contenido={'Hola mundo'}></Texto> {/* Anidar otros componente dentro de otro componente */}
      <Texto contenido={'ReactNative'}/>

      <Boton></Boton>
      
      <StatusBar style="auto" />
    </View>
  );
}

//Configuraciones de hojas de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

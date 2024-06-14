//Importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importacion para hacer usos de estado

//se crea una propiedad estilo unica para el componente texto
const Texto=({estilo})=>{ /* Parametros */
  const[contenido, setContenido] = useState('holaMundo') /* Variable de contenido (propiedad children), se u */
  const actualizarContenido=()=>{/* Array function que va a permitir hacer esa actualizacion */
    setContenido('State actualizó este texto')
  } 
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>) /* Mandar llamar el evento */
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
      {/* <Texto contenido={'Hola mundo'}></Texto> */} {/* Anidar otros componente dentro de otro componente */}
{/*       <Texto contenido={'ReactNative'}/>

      <Boton></Boton> */}
      
      {/* Mandar llamar a la propiedad estilo de nuestra hoja de estilos con nuestras clases */}
      <Texto estilo={styles.red}/>
      <Texto estilo={styles.green}/>
      <Texto estilo={styles.blue}/>
      
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
    justifyContent: 'space-around',
  },

  text:{
    color:'yellow',
    fontSize: 25,
    //Asignar un alto y ancho
/*     height:150,
    width:150, */
  },
  
  //Asignacion de colores CLASES
  red:{
    /* flex:1, */
    backgroundColor: 'red',
  },

  green:{
    /* flex:2, */
    backgroundColor: 'green',
  },

  blue:{
    /* flex:3, */
    backgroundColor: 'blue',
  },


});

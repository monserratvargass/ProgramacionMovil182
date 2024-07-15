import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window")

export default function Prueba() {
    const [modal, setModal] = useState(false);
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

        }}>
            {/* modal */}
            <Modal visible={modal} animationType="slide">

                {/* vista del modal */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}>

                        {/* recuadro blanco modal */}
                        <View style={{ width:width * 0.8, height:height*0.3, backgroundColor: '#fff', borderRadius:width * 0.1, padding: width*0.05 }}>
                            {/* boton cerrar */}
                            <TouchableOpacity onPress={() => setModal(false)} style={{ width:width * 0.2, height : width * 0.2, justifyContent:'center', alignItems:'center',backgroundColor:'#f4f4f4',borderRadius:width*0.5, left:width*0.05 }}>
                                <FontAwesome5 name="bacon" size={width * 0.1} color="#fff" />

                            </TouchableOpacity>

                        </View>

                </View>

            </Modal >


            {/* boton que abre el modal */}
            <TouchableOpacity
                onPress={() => setModal(true)}
                style={{
                    width: width * 0.8,
                    height: height * 0.07,
                    backgroundColor: "#0088f0",
                    borderRadius: width * 0.1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                <Text 
                    style={{
                        fontSize: width * 0.04,
                        fontWeight: "700",
                        color: "#fff"
                    }}
                    >
                        ABRIR MODAL

                </Text>

            </TouchableOpacity>

        </View >
    );
}
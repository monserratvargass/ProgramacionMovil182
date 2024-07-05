import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const { width, height } = Dimensions.get("window")

export default function App() {
    const [modal, setModal] = useState(false);
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

        }}>

            <Modal visible={modal} animationType="slide">
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}>

                    <View>

                        <TouchableOpacity onPress={() => setModal(false)}>
                            <FontAwesome5 name="bacon" size={width * 0.1} color="#fff" />

                        </TouchableOpacity>

                    </View>

                </View>
            </Modal >

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

            </TouchableOpacity>

            <Text>
                style={{
                    fontSize: width * 0.04,
                    fontWeight: "700",
                    color: "#fff"
                }}
            </Text>
        </View >
    );
}
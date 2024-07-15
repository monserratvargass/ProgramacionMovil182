import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    BottomSheetModalProvider,
    BottomSheetModal
} from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window")

export default function Prueba() {
    const [modal, setModal] = useState(false);

    const sheetModal = useRef(null);

    const hey = () => {
        sheetModal?.current?.present()
    }

    const snapPoints = [width*0.3, width*0.5, width*0.9]

    return (
        <GestureHandlerRootView style={{ flex: 1}}>
        <BottomSheetModalProvider>

            <BottomSheetModal
            name="mon"
            ref={sheetModal}
            snapPoints={snapPoints}
           >
            <View
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Contenido del BottomSheet</Text>
                
            </View>
           </BottomSheetModal>

            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => hey()}
                style={{
                    width: width *0.3,
                    height: height * 0.3,
                    backgroundColor: "#ffff",
                }}>
                    <Text>Hola</Text>
                </TouchableOpacity>
            </View>

        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}
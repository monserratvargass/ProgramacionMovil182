import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import homeScreen from "./screens/homeScreen";
import settingsScreen from "./screens/settingsScreen";

//Iconos
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="Home"/* Para que sea la primera pestaña en abrir una vez que entremos a la aplicacion */
        screenOptions={{
            tabBarActiveTintColor:'violet'
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={homeScreen}
            options={{
                tabBarLabel:'Feed', //Dar nombre debajo del icono
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" size={30} color={color}/> //Icono de home
                ),
                tabBarBadge: 3, //Ver una simulacion de numero de notificaciones
                headerShown: false, //Ocultar la cabecera
            }}/>
            <Tab.Screen 
            name="Settings" 
            component={settingsScreen}
            options={{
                tabBarLabel:'Feed', //Dar nombre debajo del icono
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-cog" size={30} color={color} /> //Icono de home
                ),
                headerShown: false, /* Ocultar la cabecera */
            }} />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
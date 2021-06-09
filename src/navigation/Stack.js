import React from "react";
import { StyleSheet } from 'react-native';

//J'importe le NavigationContainer et le StackNavigator depuis la librairie react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from '../navigation/Tabs';

//J'importe les différent écran que j'utiliserais dans mon application
import AddDepenses from '../../screens/AddDepenses';
import AddRevenus from '../../screens/AddRevenus';

//Je crée un constante Stack qui est égal a la fonction createStackNavigator()
const Stack = createStackNavigator();


//J'initialise mon composant fonction
const StackNavigation = () => {
    return (
        //Je crée ma navigation
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    style={StyleSheet.stackColor}
                    name='Accueil'
                    component={Tabs}
                    options={{
                        header: () => null ,
                    }}
                />
                <Stack.Screen
                    name="AddDepenses"
                    component={AddDepenses}
                    options={{
                        headerTitle: "Dépenses",
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen
                    name="AddRevenus"
                    component={AddRevenus}
                    options={{
                        headerTitle: "Revenus",
                        headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create ({
    stackColor: {
        color: 'red'
    }
})

//J'export mon composant
export default StackNavigation;
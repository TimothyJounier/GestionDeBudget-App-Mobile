import React from "react";

//J'importe le NavigationContainer et le StackNavigator depuis la librairie react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
                    name="AddDepenses"
                    component={AddDepenses}
                    options={{ 
                        headerTitle: "Ajout Dépenses",
                    }}
                />
                <Stack.Screen
                    name="AddRevenus"
                    component={AddRevenus}
                    options={{
                        headerTitle: "Ajout Revenus",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//J'export mon composant
export default StackNavigation;
import React from 'react';
import { View, Image} from 'react-native';

//J'importe le NavigationContainer et le StackNavigator depuis la librairie react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//J'importe les différent écran que j'utiliserais dans mon application
import Accueil from '../../screens/Accueil';
import Compte from '../../screens/Compte';
import Statistiques from '../../screens/Statistiques';

//Je crée un constante Tab qui est égal a la fonction createStackNavigator()
const Tab = createBottomTabNavigator();

//J'initialise mon composant fonction
const Tabs = () => {
return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            
        }}
    >
        {/* Tab Accueil */}
            <Tab.Screen 
                name="Accueil" 
                component={Accueil}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Accueil.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#a3a4dc' : '#5d5d66',
                                }}
                            />
                        </View>
                    ),
                    
                }}/>

        {/* Tab Statistiques */}
            <Tab.Screen 
                name="Statistiques" 
                component={Statistiques}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Statistiques.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#a3a4dc' : '#5d5d66',
                                }}
                            />
                        </View>
                    ),
                    
                }}/>
        {/* Tab Compte */}
            <Tab.Screen 
                name="Compte" 
                component={Compte}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent: 'center', top: 10}}>
                            <Image
                                source={require('../assets/icons/Compte.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#a3a4dc' : '#5d5d66',
                                }}
                            />
                        </View>
                    ),
                    
                }}/>
    </Tab.Navigator>

    );
}

//J'export mon composant
export default Tabs;
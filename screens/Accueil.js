import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';


const Accueil = ({ navigation }) => {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.container0}>
                <Text style={styles.text0}>Hello,{'\n'}Timothy</Text>
                    <Image
                    style={styles.img}
                    source={require('../src/assets/images/identité.png')} 
                    />
            </View>
            <View style={styles.container1}>
                <Text style={styles.text1}>Solde</Text>
                <Text style={styles.text2}>3079,89€</Text>
                    <View style={{flexDirection:'row', padding: 5, justifyContent:'center'}}>
                        <View style={styles.container3}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('AddDepenses')}
                            >
                            <Text>+ Add Dépenses</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.container3}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddRevenus')}
                >
                    <Text>+ Add Revenus</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text3}>Dernière activités</Text>
                <FlatList>

                </FlatList>
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create ({
    containerPrincipal: {
        width:'100%',
        height:'100%',
        backgroundColor:'#a3a4dc',
        alignItems:'center',
    },
    container0: {
        flexDirection:'row',
        width: '100%',
        height: '13%',
        backgroundColor:'#FFF',
        alignItems:'center'
        
    },
    container1: {
        width:'80%',
        height:'35%',
        backgroundColor:'#a3a4dc',
        justifyContent:'center',
        alignItems:'center',
    },
    container2: {
        marginTop: 20,
        padding: 30,
        width:'100%',
        height:'70%',
        backgroundColor:'#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        
    },
    container3: {
        padding: 10,
        
    },
    text0: {
        fontSize: 20,
        fontWeight:'bold',
        padding: 20,
    },
    text1: {
        fontSize: 40,
        padding: 20,
        color:'#FFFF',
    },
    text2: {
        fontSize: 50,
        color:'#FFFF',    
    },
    text3: {
        fontSize: 20
    },
    button: {
        backgroundColor:'#FFF',
        borderRadius: 16,
        padding: 10,
        marginBottom: 30,
    },
    img: {
        width: 50,
        height:50,
        borderRadius:100,
        left: 200
    }
})

export default Accueil;
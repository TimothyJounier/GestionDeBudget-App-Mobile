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
                                <Image 
                                    style={styles.image}
                                    source={require('../src/assets/icons/depenses.png')}
                    />
                            <Text style={styles.text}> Add Dépenses</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.container3}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AddRevenus')}
                >
                    <Image 
                        style={styles.image}
                        source={require('../src/assets/icons/Revenus.png')}
                    />
                    <Text style={styles.text}>Add Revenus</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text3}>Dernière activités</Text>
                <FlatList >

                </FlatList>
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create ({
    containerPrincipal: {
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        alignItems:'center',
    },
    container0: {
        flexDirection:'row',
        width: '100%',
        height: '13%',
        backgroundColor:'black',
        alignItems:'center'
        
    },
    container1: {
        width:'85%',
        height:'30%',
        backgroundColor:'#37383a',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 14,
        marginTop: 20
    },
    container2: {
        marginTop: 20,
        padding: 30,
        width:'85%',
        height:'60%',
        backgroundColor:'#37383a',
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
        color: '#FFF'
    },
    text: {
        color: '#FFF'
    },
    text1: {
        fontSize: 40,
        padding: 20,
        color:'#FFF',
    },
    text2: {
        fontSize: 50,
        color:'#FFF',    
    },
    text3: {
        fontSize: 20,
        color:'#FFF', 
    },
    button: {
        backgroundColor:'#98955f',
        borderRadius: 16,
        padding: 10,
        marginBottom: 30,
        flexDirection:'row'
    },
    img: {
        width: 50,
        height:50,
        borderRadius:100,
        left: 200
    },
    image: {
        width: 20,
        height:'100%',
        marginRight: 4
    }
})

export default Accueil;
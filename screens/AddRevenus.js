import React from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert, 
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const AddRevenus = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <View style={styles.container}>

            {/* Champ  Nom */}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='Nom'
            />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
    />
    {errors.firstName && <Text style={styles.text}>Champ requis.</Text>}
    
    {/* Champ  Prénom */}
    <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Prénom'
        />
        )}
        name="lastName"
        defaultValue=""
    />
    {errors.firstName && <Text>Champ requis.</Text>}
    
    {/* Champ  montant */}
    <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='Montant'
            />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
    />
    {errors.firstName && <Text>This is required.</Text>}

    {/* Champ Date */}
    <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='Date'
            />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
    />
    {errors.firstName && <Text>Champ requis.</Text>}

    {/* Champ Commentaire */}
    <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.inputCommentaire}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='Commentaire'
                multiline
            />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
    />
    {errors.firstName && <Text>Champ requis.</Text>}

        <View style={styles.container2}>
                {/* Bouton Envoyer */}
                <TouchableOpacity
                    style={styles.button} 
                    title="Envoyer" 
                    onPress={handleSubmit(onSubmit)}
            >
            <Text style={{color:'black'}}>Envoyer</Text>
                </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    container2: {
        backgroundColor: '#a3a4dc',
        width:'100%',
        height:'30%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        borderWidth: 1.5,
        borderColor:'#a3a4dc',
        width: '70%',
        height:'5%',
        margin: 20,
        borderRadius: 10,
        paddingLeft: 10
    },
    button: {
        backgroundColor:'#FFF',
        borderRadius: 16,
        width:'50%',
        height: '20%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20   
    },
    inputCommentaire: {
        borderWidth: 1.5,
        borderColor:'#a3a4dc',
        width: '70%',
        height:'15%',
        margin: 20,
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 70
    },
})

export default AddRevenus;
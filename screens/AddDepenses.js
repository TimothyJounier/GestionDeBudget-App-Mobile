import React, {useState} from 'react';
import {
StyleSheet,
View,
Text,
TextInput,
TouchableOpacity,
Platform,
} from 'react-native';

// librairies de composants
import {Picker} from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';

// librairies de formatage
import moment from 'moment';
// librairies de validation de formulaire

import {useForm, Controller} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';

// schéma de validation

const schema = yup.object().shape({
user: yup.string().required('Champ obligatoire'),
amount: yup
    .number()
    .positive('Veuillez renseigner un montant supérieur 0')
    .typeError('Le montant saisi est incorrect'),
date: yup.date().required('Champ obligatoire'),
category: yup.string().required('Champ obligatoire'),
comments: yup.string().nullable(),
});

const categories = [
'Alimentaire',
'Factures',
'Transport',
'Logement',
'Santé',
'Divertissement',
'Vacances',
'Shopping',
'Autre',
];

function AddIncomeScreen() {
  // const [selectedLanguage, setSelectedLanguage] = useState();

const [show, setShow] = useState(false);

  //   recupère les propriétés returnée par le hook

const {
    control,
    formState: {errors},
    getValues, // permet de récupérer une valeur dans le state du formulaire
    setValue, // permet de muter une valeur dans le state du formulaire
    handleSubmit, // permet de traiter tous le champs controlés à la validation du formulaire
} = useForm({
    resolver: yupResolver(schema), // Permet d'appliquer les règles définie dans yup comme règle de validation à utiliser par forme hook
});

console.log(errors);

  //   Validation du formulaire
const onSubmit = data => console.log(data);

return (
    <View style={styles.container}>
        
        <View style={styles.inputGroup}>
          {/* composant de form hook permettant de gérer les champs react native */}
            <Controller
            control={control} // définie le champs comme controlé
            render={({field: {onChange, onBlur, value}}) => (
              // <Text> ==> Element React.Fragment permet d'englober du JSX sans créer un nouveau noeud dans le DOM
                <>
                <Text style={styles.label}>Bénéficiaire</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                />
                </>
            )}
            name="user"
            defaultValue=""
            />
          {/* affiche le message s'il existe */}
            {errors.user?.message && (
            <Text style={styles.errors}>{errors.user.message}</Text>
            )}
        </View>

        <View style={styles.inputGroup}>
            <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
                <>
                <Text style={styles.label}>Montant</Text>
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={value => onChange(value)}
                />
                </>
            )}
            name="amount"
            defaultValue=""
            />

            {errors.amount?.message && (
            <Text style={styles.errors}>{errors.amount.message}</Text>
            )}
        </View>

        <View style={styles.inputGroup}>
            <Text style={styles.label}>Date</Text>
          {/* affiche le picker lorsqu'on clique sur le TextInput */}
            <TouchableOpacity
            onPress={() => {
                setShow(true);
            }}>
            <TextInput
                editable={false}
                style={styles.input}
              // librairie moment qui permet de manipuler des dates
                value={moment(getValues('date')).format('DD/MM/YYYY')}
            />
            </TouchableOpacity>
        {errors.date?.message && (
            <Text style={styles.errors}>{errors.date.message}</Text>
        )}
        </View>
        {/* Picker modal de date */}
        {show && (
            <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
                <DatePicker
                mode="date"
                value={value}
                display="default"
                onChange={(event, selectedDate) => {
                    const currentValue = selectedDate || value;
                    setValue('date', currentValue);
                    setShow(Platform.OS === 'ios');
                    
                }}
            />
            )}
            name="date"
            defaultValue={new Date()}
        />
        )}
        {errors.user?.date && (
            <Text style={styles.errors}>{errors.user.date}</Text>
        )}
        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputGroup2}>
            <Text style={styles.label}>Catégorie</Text>
            <View style={styles.input1}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                    setValue('category', itemValue)
                }>
                    <Picker.Item
                    label="Choisir une catégorie"
                    enabled={false}
                    />
                {categories.map((category, index) => {
                    return (
                        <Picker.Item
                        key={index}
                        label={category}
                        value={category}
                        />
                    );
                    })}
                </Picker>
                </View>
            </View>
            )}
            name="category"
            defaultValue=""
        />
        {errors.category?.message && (
            <Text style={styles.errors}>{errors.category.message}</Text>
        )}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputGroup1}>
            <Text style={styles.label}>Commentaires</Text>
            <TextInput
                style={[styles.input, styles.textarea]}
                multiline={true}
            />
            </View>
        )}
            name="comments"
            defaultValue=""
        />

        {errors.comments?.message && (
        <Text style={styles.errors}>{errors.comments.message}</Text>
        )}

        <View style={styles.containerFooter}>
        <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.button]}>
            <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems: 'center'
},
input: {
    width: 250,
    height: 32,
    backgroundColor: '#37383a',
    borderBottomWidth: 1.5,
    borderColor: '#98955f',
    borderRadius: 10,
    paddingLeft: 5
},
label: {
    color: '#FFF',
    marginBottom: 5,
},
errors: {
    color: '#D0021B',
    fontSize: 13,
},
inputGroup: {
    backgroundColor: 'black',
    width:'80%',
    height: '10%',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
},
inputGroup1: {
    width:'80%',
    height: '16%',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center'
},
inputGroup2: {
    width:'80%',
    height: '16%',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
},
textarea: {
    height: 80,
},
picker: {
    alignItems: 'center',
},
button: {
    height: 44,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#98955f',
    borderRadius: 5,
},
buttonText: {
    color: '#FFF'
},
input1: {
    width: 280,
    height: 60,
    backgroundColor: '#37383a',
    borderBottomWidth: 1,
    borderColor: '#98955f',
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent:'center'
},
containerFooter: {
    backgroundColor: 'black',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
}
});

export default AddIncomeScreen;

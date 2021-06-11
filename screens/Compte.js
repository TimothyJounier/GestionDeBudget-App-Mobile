import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataContext} from '../DataContext';

const AccountsScreens = () => {
    const data = useContext(DataContext);

    const navigation = useNavigation();

    const goToDetails = item => {
        navigation.navigate('CompteDetails', {
        user: item.user,
        transaction: {incomes: item.incomes, expense: item.expenses},
    });
};
    const renderItem = ({item, index}) => {
    return (
        <View style={styles.item}>
        <TouchableOpacity onPress={() => goToDetails(item)}>
            <Text style={styles.itemText}>{item.user}</Text>
        </TouchableOpacity>
        </View>
    );
};
    return (
        <FlatList
            data={data}
            onRefresh={() => data}
            refreshing={false}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            style={{backgroundColor:'black'}}
    />
    );
};

export default AccountsScreens;

const styles = StyleSheet.create({
item: {
    borderBottomWidth: 2,
    borderColor: '#98955f',
    backgroundColor: '#FFF',
    paddingVertical: 25,
    marginBottom: 4,
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#37383a',
},
itemText: {
    fontSize: 18,
    color:'#FFF'
    },
});
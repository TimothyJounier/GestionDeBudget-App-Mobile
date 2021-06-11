import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AccountDetailsScreen = () => {
  const route = useRoute();

  //   Récupération des paramètres de route
  const userData = route.params.transaction;

  /**
   *Permet de grouper et de trier les operations par date
   * @returns array
   */

  // affichage de la liste des opérations
  const filteredTransacList = () => {
    // on tag les opérations avec leur type
    let preparedData = [];
    for (let key in userData) {
      let temp = userData[key].map(item => ({...item, ...{[key]: true}}));
      preparedData.push(temp);
    }
    // On trie les opérations par date
    const sortedByDate = preparedData.flat(1).sort((item, itemNext) => {
      const date1 = new Date(item.date);
      const date2 = new Date(itemNext.date);
      return date1 > date2 ? -1 : 1;
    });
    console.log(sortedByDate)
    
    return sortedByDate.flat(1);
  };
  //   render de la FlatList
  const renderItem = ({item, index}) => (
    <View style={[styles.listItem, index % 2 === 0 ? styles.odd : styles.even]}>
      <View>
        <Text style={{color: '#FFF'}}>{moment(item.date).format('DD/MM/YYYY')}</Text>
        <Text style={{color: '#FFF'}}>{item.category}</Text>
      </View>
      <View>
        <Text style={item.incomes ? styles.styleIncome : styles.styleExpense}>
          {`${item.incomes ? '+' : '-'} ${item.amount.replace('€' , ' ')}`} €
        </Text>
      </View>
    </View>
  );

  return (
      <FlatList
        data={filteredTransacList()}
        keyExtractor={(item, idx) => idx}
        renderItem={renderItem}
        style={{backgroundColor:'black'}}
      />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#98955f',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 5
  },
  styleIncome: {
    color: 'green',
  },
  styleExpense: {
    color: 'red',
  },
  odd: {
    backgroundColor: '#37383a',
  },
  even: {
    backgroundColor: '#37383a',
  },
});

export default AccountDetailsScreen;
import { Text, View, StyleSheet, FlatList } from "react-native";

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2022',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '2/09/2022',
    type: 1 // receita / entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Eduardo"/>

        <Balance saldo='10.000,09' gastos='-527,00'/>

          <Actions/>

        <Text style={styles.title}>Extrato</Text>

        <FlatList 
            style={styles.list} 
            data={list}
            keyExtractor={(item) => String(item.id)}  
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => <Movements data={item}/>}     
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});
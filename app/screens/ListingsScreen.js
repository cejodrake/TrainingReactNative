import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Screen from '../components/Screen'

import Card  from  '../components/Card'
import colors from '../config/colors';

const  listings = [
  {
    id:1,
    title:"Red Jack for sale",
    price:100,
    image:require('../assets/goydo.jpeg')

  },
  {
    id:2,
    title:"T-Shirt React ",
    price:1000,
    image:require('../assets/shirtreact.jpeg')

  },
  {
    id:3,
    title:"T-Shirt React 2 ",
    price:1000,
    image:require('../assets/shirtreact.jpeg')

  },
  {
    id:4,
    title:"T-Shirt React 2 ",
    price:1000,
    image:require('../assets/shirtreact.jpeg')

  }
]
function ListingsScreen(props) {
    return (
      <Screen style ={ styles.screen}>
      <FlatList
        data= {listings}
        keyExtractor = {listing => listing.id.toString()}
        renderItem= {({item}) => 
        <Card
        title={item.title}
        subTitle={"$" + item.price}
        image= {item.image}
         />}
       />

      </Screen>
    );
}
const styles = StyleSheet.create({
 screen:{
   padding:20,
   backgroundColor:colors.light
 }

})

export default ListingsScreen;
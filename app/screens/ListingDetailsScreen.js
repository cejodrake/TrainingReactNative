import React from 'react';
import {View, Image, StyleSheet,Text} from 'react-native'
import Text from '../components/Text';
import colors from '../config/colors';
import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
       <View>
            <Image style = {styles.image} source = {require("../assets/shirtreact.jpeg")} />
            <View style = {styles.detailsContainer}>
            <AppText style={styles.title}> Read Jacket</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
            <ListItem
             image={require('../assets/goydo.jpeg')}
             title="Santiago Calix"
             subTitle=" 5 Listings"   
             />
            </View>

            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    },
    image: {
        width:"100%",
        height:300
    },
    title:{
        fontSize:24,
        fontWeight:"500",
        color: colors.primary
    },
    price:{
        color: colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10
    },
    userContainer:{
        marginVertical:40
    }
})

export default ListingDetailsScreen;
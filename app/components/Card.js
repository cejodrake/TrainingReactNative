import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import colors from '../config/colors';
import Text from './Text';
import ListItem   from '../components/ListItem'

function  Card  ({title , subTitle,image}) {
    return (
        <View style={styles.card}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        
        </View>
    )
}

const styles  = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    title: {
        marginBottom:7
    }
})

export default Card;
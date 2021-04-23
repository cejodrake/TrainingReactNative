import React from 'react';
import { ImageBackground, StyleSheet, View , Image,Text} from 'react-native';
import Button from '../components/Button';

function WelcomeScreen(props) {
    return (
     <ImageBackground borderRadius ={10}  style ={styles.background} source = {require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>

        <Image source ={require('../assets/logo-red.png')} style={styles.logo}/>
        <Text style ={ styles.tagline}>Sell What  You Don't need </Text>

        </View>
        <View style ={styles.buttonsContainer}>
        <Button title ="Login"/>
        <Button  title ="Register" color="secondary"/>
         
        </View>
        

     </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background :{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
   tagline:{
       fontSize:25,
       fontWeight:"600",
       paddingVertical:20
   }
   ,

    logo:{
        width:100,
        height:100,
      
    },
    logoContainer : {
        position:'absolute',
        top:70,
        alignItems:"center"
    },
    buttonsContainer:{
        padding:20,
        width:"100%"
    }
})

export default WelcomeScreen;
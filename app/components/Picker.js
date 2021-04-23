import React , {useState} from 'react';
import {View,Button ,TextInput,StyleSheet, Modal,TouchableWithoutFeedback, FlatList} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from  './Screen'
import defaultStyles from '../config/styles'
import Text from './Text';




function Picker({
    icon,
    items,
    onSelectItem ,
    numberOfColumns=1,
    PickerItemComponent,
    placeholder,selectItem, 
    width = "100%"}) {

    const [modalVisible , setModalVisible] = useState(false)
    return (
     <>
     <TouchableWithoutFeedback onPress ={() => setModalVisible(true)}>
    <View style ={[styles.container,{width}]}>
       { icon  &&  <MaterialCommunityIcons 
                        name={icon} size ={20} 
                        color ={defaultStyles.colors.medium} 
                        style ={styles.icon}/>}
                        
       {selectItem ? (<Text style ={styles.text}>{selectItem.label}</Text>)
       :(<Text style ={styles.placeholder}>{placeholder}</Text>)}

      

       { icon  &&  <MaterialCommunityIcons 
                        name="chevron-down"
                        size ={20} 
                        color ={defaultStyles.colors.medium} 
                        />}
    </View>
    </TouchableWithoutFeedback>
    
    <Modal visible ={modalVisible} animationType="slide" >
        <Screen>
        <Button title="close" onPress = {() => setModalVisible(false)}/>
        <FlatList
            data={items}
            keyExtractor ={(item) => item.value.toString()}
           
            renderItem = {({item}) =>( 

                  <PickerItemComponent
                    item= {item}
               
                      label ={item.label}
                      onPress ={()=> {
                          setModalVisible(false)
                          onSelectItem(item)
                      }}
                  />)}
                  numColumns = {numberOfColumns}
        />
        </Screen>
    </Modal>
    
    
    </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
    
        padding:15,
        marginVertical:10
    },
   
    icon:{
        marginRight:10
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1
    },
    text:{
        flex:1
    }
})

export default Picker;
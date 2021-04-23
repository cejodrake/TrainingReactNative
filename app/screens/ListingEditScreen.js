import React from 'react';
import {StyleSheet} from 'react-native'
import  * as Yup from 'yup'

import CategoryPickerItem from '../components/CategoryPickerItem'

import {
    Form,
    FormField as FormField ,
    FormPicker as Picker ,
    SubmitButton
} from '../components/forms/index.js'

import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category : Yup.object().required().nullable().label("Category")

})

 const categories = [
     {label:"Furniture" , value:1,  backgroundColor:'red', icon:'sofa'},
     {label:"Car", value:2,backgroundColor:'green', icon:'car'},
     {label:"Games", value:3,backgroundColor:'blue', icon:'play'},
     {label:"Movie and Music", value:3,backgroundColor:'red', icon:'music'},
     {label:"Sport", value:3,backgroundColor:'blue', icon:'soccer'},
     {label:"Camera", value:3,backgroundColor:'green', icon:'camera'}
 ]

function ListingEditScreen() {
    return (
        <Screen  style ={styles.container}>
        <Form initialValues= {{
            title:"",
            price:"",
            description:"",
            category:null
        }}
        onSubmit ={(values) => console.log(values)}
        validationSchema ={validationSchema}
        >
        <FormField
             maxLength ={255} 
             name="title"
              placeholder ="Title" />
        <FormField 
            maxLength ={8} 
            keyboardType="numeric" 
            name="price" 
            placeholder ="Price" 
            width={120}/>
        <Picker
             items={categories} 
             name="category" 
             numberOfColumns = {3}
             PickerItemComponent = {CategoryPickerItem}
             placeholder="Category" 
             width ="50%" />
        <FormField 
            maxLength ={255} 
            multiline name="description" 
            numberOfLine ={3} 
            placeholder ="Description" />
        <SubmitButton title="Post"/>
        </Form>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
      padding:20,
      
    }
   
   })
export default ListingEditScreen;
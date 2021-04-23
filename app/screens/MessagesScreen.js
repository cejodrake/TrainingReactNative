import React, {useState} from 'react';
import { FlatList, SafeAreaView,StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen  from '../components/Screen'

const initialMessages = [
    {
        id:1,
        title:"Test1",
        description:"Test FlatList",
        image :require("../assets/goydo.jpeg")
    },
    {
        id:2,
        title:"Test2",
        description:"Test FlatList",
        image :require("../assets/goydo.jpeg")
    },
    {
        id:3,
        title:"Test3",
        description:"Test FlatList",
        image :require("../assets/goydo.jpeg")
    },
    {
        id:4,
        title:"Test4",
        description:"Test FlatList",
        image :require("../assets/goydo.jpeg")
    }
]



function MessagesScreen(props) {

    const [messages,setMessage] = useState(initialMessages)
    const [refresing, setRefresing] = useState(false)
    
    const handleDelete = message => {
        
        setMessage(messages.filter(m => m.id !== message.id))
    }

    return (

        <Screen >
            
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem = {({item}) => 
        <ListItem
           title={item.title}
           subTitle={item.description}
           image ={item.image}  
           onPress={() => console.log("Message the option was tapped" , item)}
           
           renderRightActions = {() => <ListItemDeleteAction 
            onPress= {() => handleDelete(item)}/>}
        />}
           ItemSeparatorComponent = { ListItemSeparator}
           refreshing= {refresing}
           onRefresh={() => {
               setMessage([
                {
        id:4,
        title:"Test4",
        description:"Test FlatList",
        image :require("../assets/goydo.jpeg")
    }
               ]
               )
           }}
           />  
        </Screen>
    );
}


export default MessagesScreen;
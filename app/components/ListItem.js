import React from "react";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function ListItem({ title= "there is not title", 
    subTitle, 
    image, 
    ImageComponent,
    onPress,
    renderRightActions }) {

  return (
    <Swipeable renderRightActions ={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
          
          <View styles={styles.detailContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
           { subTitle &&  <Text styles={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
          
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor:colors.white
  },
  detailContainer: {
    marginLeft:20
    
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
   
  },
 
  title: {
    fontWeight: "500"
  },
  subTitle: {
    color: colors.medium
  }
});
export default ListItem;

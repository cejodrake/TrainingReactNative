import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  },
  title: {
    marginBottom: 7
  }
});

export default Card;

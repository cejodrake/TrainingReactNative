import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import Text from "./Text";
import colors from "../config/colors";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknow" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}> No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    height: 50,
    position: "absolute",
    justifyContent: "center",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1
  },
  text: {
    color: colors.white
  }
});
export default OfflineNotice;

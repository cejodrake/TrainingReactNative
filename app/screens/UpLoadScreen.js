import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
import * as Progress from "react-native-progress";
export default function UpLoadScreen({
  progress = 0,
  visible = false,
  onDone
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animation/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  animation: { width: 150 }
});
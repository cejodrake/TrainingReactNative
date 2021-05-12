import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: "Messages"
  }
];

function AccountScreen({ navigation }) {
  return (
    <Screen>
      <View styles={styles.container}>
        <ListItem
          title="Santiago Calix"
          subTitle="SantiagoCalix@gmail.com"
          image={require("../assets/goydo.jpeg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle="test"
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  }
});
export default AccountScreen;

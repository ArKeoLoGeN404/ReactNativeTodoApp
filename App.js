import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { useSafeAreaInsets, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



import ScreenPending from "./components/ScreenPending";
import ScreenComplete from "./components/ScreenComplete";
import ModalAddTask from "./components/ModalAddTask";

import {
  Headline,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "black",
    },
  };


  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();
  const TabTop = createMaterialTopTabNavigator();

  

  // const insets = useSafeAreaInsets();

  return (
    
    <PaperProvider theme={theme}>
      {/* <SafeAreaProvider > */}
      <NavigationContainer>
        <TabTop.Navigator
          style={styles.items}
        >
          <TabTop.Screen name="Pending" component={ScreenPending} />
          <TabTop.Screen name="Completed" component={ModalAddTask} />
        </TabTop.Navigator>
      </NavigationContainer>
      
      {/* </SafeAreaProvider> */}
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  
  items: {
    marginTop: 30,
  },

  
});

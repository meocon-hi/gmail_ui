import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { colors } from "../assets/colors";
import InboxScreen from "../screens/InboxScreen";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import BottomTabContainer from "./BottomTabContainer";
import MeetScreen from "../screens/MeetScreen";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: colors.black,
  tabBarInactiveTintColor: colors.gray,
  tabBarLabelStyle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
  },
  tabBarStyle: {
    backgroundColor: colors.lightBlue,
    borderTopWidth: 0,
    elevation: 0,
    height: 58,
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator shifting={true} screenOptions={screenOptions}>
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerShown: false,
          tabBarLabel: "メール",
          tabBarBadge: 7,
          tabBarBadgeStyle: {
            backgroundColor: colors.red,
            fontSize: 12,
            height: 18,
            width: 24,
          },
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <BottomTabContainer>
                <MaterialIcons name="mail-outline" size={size} color={color} />
              </BottomTabContainer>
            ) : (
              <MaterialIcons name="mail-outline" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={MeetScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Meet",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <BottomTabContainer>
                <AntDesign name="videocamera" size={size} color={color} />
              </BottomTabContainer>
            ) : (
              <AntDesign name="videocamera" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;

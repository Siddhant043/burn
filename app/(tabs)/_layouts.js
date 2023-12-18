import { Tabs } from "expo-router";
import AnalyticsLogo from "../../assets/tabs-logo/analytics.png";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarLabel: "Network",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            margin: 10,
            borderRadius: 500,
            backgroundColor: "orange",
            paddingBottom: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            height: 70,
            marginTop: -50,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarLabel: "Network",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            margin: 10,
            borderRadius: 500,
            backgroundColor: "orange",
            paddingBottom: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            height: 70,
            marginTop: -50,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "Network",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            margin: 10,
            borderRadius: 500,
            backgroundColor: "orange",
            paddingBottom: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            height: 70,
            marginTop: -50,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: "Network",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            margin: 10,
            borderRadius: 500,
            backgroundColor: "orange",
            paddingBottom: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            height: 70,
            marginTop: -50,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarLabel: "Network",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            margin: 10,
            borderRadius: 500,
            backgroundColor: "orange",
            paddingBottom: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            height: 70,
            marginTop: -50,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={AnalyticsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
    </Tabs>
  );
}

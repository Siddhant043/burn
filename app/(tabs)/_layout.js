import { Tabs } from "expo-router";
import AnalyticsLogo from "../../assets/tabs-logo/analytics.png";
import AnalyticsLogoFocused from "../../assets/tabs-logo/analytics-focused.png";
import ExerciseLogo from "../../assets/tabs-logo/exercise.png";
import ExerciseLogoFocused from "../../assets/tabs-logo/exercise-focused.png";
import DashboardLogo from "../../assets/tabs-logo/dashboard.png";
import CommunityLogo from "../../assets/tabs-logo/community.png";
import CommunityLogoFocused from "../../assets/tabs-logo/community-focused.png";
import WorkoutsLogo from "../../assets/tabs-logo/workouts.png";
import WorkoutsLogoFocused from "../../assets/tabs-logo/workouts-focused.png";
import { COLORS } from "../../constants";

import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: `${COLORS.gray[800]}`,
          height: 80,
          borderTopWidth: 2,
          borderTopColor: "#868181",
        },
      }}
    >
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={AnalyticsLogoFocused}
                height={100}
                width={100}
                alt=""
              />
            ) : (
              <Image
                source={AnalyticsLogo}
                height={20}
                width={20}
                alt=""
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={ExerciseLogoFocused}
                height={100}
                width={100}
                alt=""
              />
            ) : (
              <Image source={ExerciseLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: "",

          headerShown: false,
          tabBarItemStyle: {
            backgroundColor: "red",
            height: 80,
            marginTop: -40,
            paddingTop: 10,
            borderRadius: 100,
            backgroundColor: `${COLORS.gray[800]}`,
            borderWidth: 2,
            borderColor: "#868181",
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={DashboardLogo} height={100} width={100} alt="" />
            ) : (
              <Image source={DashboardLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={CommunityLogoFocused}
                height={100}
                width={100}
                alt=""
              />
            ) : (
              <Image source={CommunityLogo} height={100} width={100} alt="" />
            ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: { color: "#008e97" },
          headerShown: false,
          tabBarItemStyle: {
            height: 80,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={WorkoutsLogoFocused}
                height={100}
                width={100}
                alt=""
              />
            ) : (
              <Image source={WorkoutsLogo} height={100} width={100} alt="" />
            ),
        }}
      />
    </Tabs>
  );
}

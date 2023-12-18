import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import dashboardStyles from "./dashboard.styles";
import { useUserData } from "../../../hooks/user/userHooks";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userSlice";
import ProfileLogo from "../../../assets/profile.png";

const index = () => {
  const { userDetails } = useUserData();
  useEffect(() => {
    userDetails();
  }, []);
  const userData = useSelector(selectUser);

  return (
    <SafeAreaView style={dashboardStyles.main}>
      <View style={dashboardStyles.innerContainer}>
        <View style={dashboardStyles.headerContainer}>
          <Text style={dashboardStyles.title}>
            Good morning,{" "}
            <Text style={dashboardStyles.name}>{userData.name}</Text>
          </Text>
          <Image
            source={
              userData.profile.profilePicture
                ? userData.profile.profilePicture
                : ProfileLogo
            }
            style={dashboardStyles.profileImage}
            alt=""
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});

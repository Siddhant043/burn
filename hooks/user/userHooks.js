import axios from "axios";
import { DEV_ENDPOINT } from "@env";
import { Alert } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setToken, setUser } from "../../redux/reducers/userSlice";
import { useRouter } from "expo-router";

export const useUserData = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const register = async (user) => {
    try {
      const { email, password, confirmPassword } = user;
      const response = await axios.post(`${DEV_ENDPOINT}/users/signup`, {
        email,
        password,
        passwordConfirm: confirmPassword,
      });
      const { authToken } = await response.data; // Destructuring the response
      dispatch(setToken(authToken));
      Alert.alert(
        "Registeration Successful",
        "You have been registered successfully"
      );
      return { success: true, data: response.data }; // You can return additional data if needed
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, error: error }; // You can customize the error handling based on your needs
    }
  };

  const login = async (user) => {
    try {
      const { email, password } = user;
      const response = await axios.post(`${DEV_ENDPOINT}/users/login`, {
        email,
        password,
      });
      const { authToken } = await response.data; // Destructuring the response
      dispatch(setToken(authToken));
      Alert.alert(
        "Login Successful",
        "You have been completed your profile successfully"
      );
      router.push("/(tabs)/dashboard");
      return { success: true, data: response.data }; // You can return additional data if needed
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error }; // You can customize the error handling based on your needs
    }
  };

  const aToken = useSelector(selectToken);
  const update = async (user) => {
    try {
      const {
        name,
        height,
        weight,
        gender,
        fitnessLevel,
        goal,
        trainingLevel,
        dateOfBirth,
      } = user;
      const body = {
        name,
        profile: {
          height,
          weight,
          gender,
          fitnessLevel,
          goal,
          trainingLevel,
          dob: dateOfBirth,
        },
      };
      const response = await axios.patch(
        `${DEV_ENDPOINT}/users/updateMe`,
        body,
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
          },
        }
      );
      Alert.alert(
        "Profile Completed",
        "You have been completed your profile successfully"
      );
      return { success: true, data: response.data }; // You can return additional data if needed
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, error: error }; // You can customize the error handling based on your needs
    }
  };

  const userDetails = async () => {
    try {
      const response = await axios.get(`${DEV_ENDPOINT}/users/me`, {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      const data = await response.data.data.data;
      const payload = {
        name: data.name,
        email: data.email,
        connections: data.connections,
        connectionsSent: data.connectionsSent,
        connectionsRecieved: data.connectionsRecieved,
        workouts: data.workouts,
        profile: {
          height: data.profile.height,
          weight: data.profile.weight,
          gender: data.profile.gender,
          fitnessLevel: data.profile.fitnessLevel,
          goal: data.profile.goal,
          trainingLevel: data.profile.trainingLevel,
          dateOfBirth: data.profile.dob,
          profilePicture: data.profile.profilePicture,
          description: data.profile.description,
        },
      };
      dispatch(setUser(payload));
    } catch (error) {
      console.error("Failed to get user", error);
      return { success: false, error: error };
    }
  };

  return {
    register,
    update,
    login,
    authToken: aToken,
    userDetails,
  };
};

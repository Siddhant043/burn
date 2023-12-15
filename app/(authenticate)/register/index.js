import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Logo from "../../../assets/logo-white.png";
import { Entypo } from "@expo/vector-icons";
import PrimaryButton from "../../../components/PrimaryButton";
import SimpleButton from "../../../components/SimpleButton";
import GoogleIcon from "../../../assets/google-icon.png";
import MetaIcon from "../../../assets/meta-icon.png";
import { useRouter } from "expo-router";
import { useUserData } from "../../../hooks/user/userHooks";

const register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, toggleShowPassword] = useState(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useState(false);
  const { register } = useUserData();

  const handleSignUp = () => {
    register(data);
    router.push("/userDetails");
  };

  const handleSignUpWithGoogle = () => {};
  const handleSignUpWithMeta = () => {};

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={Logo}
            alt=""
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Hey, </Text>
          <Text style={styles.heading}>Sign up now</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#868181"}
            value={data.email}
            onChangeText={(text) => setData({ ...data, email: text })}
          />
          <View style={styles.passwordContainer}>
            <Pressable
              style={styles.passwordIcon}
              onPress={() => toggleShowPassword((prev) => !prev)}
            >
              <Entypo
                name={showPassword ? "eye-with-line" : "eye"}
                size={24}
                color="#3E4553"
              />
            </Pressable>

            <TextInput
              secureTextEntry={showPassword ? false : true}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"#868181"}
              value={data.password}
              onChangeText={(text) => setData({ ...data, password: text })}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Pressable
              style={styles.passwordIcon}
              onPress={() => toggleShowConfirmPassword((prev) => !prev)}
            >
              <Entypo
                name={showConfirmPassword ? "eye-with-line" : "eye"}
                size={24}
                color="#3E4553"
              />
            </Pressable>

            <TextInput
              secureTextEntry={showConfirmPassword ? false : true}
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={"#868181"}
              value={data.confirmPassword}
              onChangeText={(text) =>
                setData({ ...data, confirmPassword: text })
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton size="large" handlePress={handleSignUp}>
            Sign up
          </PrimaryButton>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dividerContainerOne}>
            <View style={styles.dividerOne} />
            <View>
              <Text style={styles.dividerText}>Or sign up with</Text>
            </View>
            <View style={styles.dividerOne} />
          </View>
        </View>
        <View style={styles.otherLoginContainer}>
          <SimpleButton icon={GoogleIcon} handlePress={handleSignUpWithGoogle}>
            Sign up with Google
          </SimpleButton>
          <SimpleButton icon={MetaIcon} handlePress={handleSignUpWithMeta}>
            Sign up with Meta
          </SimpleButton>
        </View>
        <View style={styles.goToSignupContainer}>
          <Pressable onPress={() => router.replace("/login")}>
            <Text style={styles.signupText}>Alreadt have a account? Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default register;

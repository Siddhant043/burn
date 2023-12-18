import {
  Image,
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
import { validateEmail } from "../../../utils/validateEmail";
import ErrorComponent from "../../../components/ErrorComponent";

const Login = () => {
  const router = useRouter();
  const { login } = useUserData();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, toggleShowPassword] = useState(false);

  const handleLogin = () => {
    setEmailError("");
    if (!validateEmail(data.email)) {
      setEmailError("*Valid email is required");
    } else {
      login(data);
    }
  };
  const handleForgotPassword = () => {};
  const handleLoginWithGoogle = () => {};
  const handleLoginWithMeta = () => {};

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
          <Text style={styles.heading}>Login now</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#868181"}
            value={data.email}
            onChangeText={(text) => setData({ ...data, email: text })}
          />
          <ErrorComponent error={emailError} />
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
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton size="large" handlePress={handleLogin}>
            Login
          </PrimaryButton>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dividerContainerOne}>
            <View style={styles.dividerOne} />
            <View>
              <Text style={styles.dividerText}>Or login with</Text>
            </View>
            <View style={styles.dividerOne} />
          </View>
        </View>
        <View style={styles.otherLoginContainer}>
          <SimpleButton icon={GoogleIcon} handlePress={handleLoginWithGoogle}>
            Login with Google
          </SimpleButton>
          <SimpleButton icon={MetaIcon} handlePress={handleLoginWithMeta}>
            Login with Meta
          </SimpleButton>
        </View>
        <View style={styles.goToSignupContainer}>
          <Pressable onPress={() => router.replace("/register")}>
            <Text style={styles.signupText}>Don't have a account? Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

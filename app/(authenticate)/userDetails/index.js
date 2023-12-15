import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Logo from "../../../assets/logo-white.png";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import PrimaryButton from "../../../components/PrimaryButton";

import { useRouter } from "expo-router";
import { useUserData } from "../../../hooks/user/userHooks";

const pickerStyle = {
  placeholder: {
    color: "#868181",
  },
};

const userDetails = () => {
  const router = useRouter();
  const { update } = useUserData();
  const [data, setData] = useState({
    name: "",
    dateOfBirth: "",
    weight: "",
    gender: "",
    height: "",
    fitnessLevel: "",
    trainingLevel: "",
    goal: "",
  });

  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setData({ ...data, dateOfBirth: currentDate.toDateString() });
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIosDate = () => {
    setData({ ...data, dateOfBirth: currentDate.toDateString() });
    toggleDatePicker();
  };

  const handleWeightChange = (text) => {
    setData({
      ...data,
      weight: text.replace(/[^0-9.]/g, ""),
    });
  };
  const handleHeightChange = (text) => {
    setData({
      ...data,
      height: text.replace(/[^0-9]/g, ""),
    });
  };

  const handleComplete = () => {
    update(data);
  };

  const genderPlaceholder = {
    label: "Gender",
    value: null,
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  const fintessLevelPlaceholder = {
    label: "Body Type",
    value: null,
  };

  const fitnessLevelOptions = [
    { label: "Naturally Higher Bodyfat", value: "fat" },
    { label: "Nautrally Muscular", value: "fit" },
    { label: "Naturally Skinny", value: "skinny" },
  ];
  const trainingLevelPlaceholder = {
    label: "Experience level in weight lifting",
    value: null,
  };

  const trainingLevelOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advance", value: "advance" },
  ];
  const goalPlaceholder = {
    label: "Goal",
    value: null,
  };

  const goalOptions = [
    { label: "Bodybuilding", value: "bodybuilding" },
    { label: "Toning", value: "toning" },
    { label: "Weight Loss", value: "weight-loss" },
  ];

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
          <Text style={styles.heading}>Details</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={"#868181"}
            value={data.name}
            onChangeText={(text) => setData({ ...data, name: text })}
          />
          <View style={styles.secondLineContainer}>
            {!showPicker ? (
              <Pressable
                style={styles.dateContainer}
                onPress={() => setShowPicker(true)}
              >
                <Text style={styles.dateText(date !== currentDate)}>
                  {date === currentDate
                    ? "Date"
                    : date.toLocaleDateString("en-GB")}
                </Text>
              </Pressable>
            ) : showPicker && Platform.OS === "ios" ? (
              <Modal>
                <Pressable
                  onPress={() => setShowPicker(false)}
                  style={styles.modalView}
                >
                  <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                    editable={false}
                    textColor="#000"
                    onPressIn={toggleDatePicker}
                    style={styles.datePicker}
                    minimumDate={new Date(1950, 0, 1)}
                    maximumDate={new Date()}
                  />

                  <TouchableOpacity
                    style={styles.confirmDate}
                    onPress={confirmIosDate}
                  >
                    <Text>Confirm</Text>
                  </TouchableOpacity>
                </Pressable>
              </Modal>
            ) : (
              <View style={styles.modalView}>
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChange}
                  editable={false}
                  onPressIn={toggleDatePicker}
                  style={styles.datePicker}
                />
              </View>
            )}
            <TextInput
              style={styles.inputTwo}
              placeholder="Weight (kgs)"
              keyboardType="numeric"
              placeholderTextColor={"#868181"}
              value={data.weight}
              onChangeText={(text) => handleWeightChange(text)}
            />
          </View>
          <View style={styles.thirdLineContainer}>
            <View style={styles.inputTwo}>
              <RNPickerSelect
                placeholder={genderPlaceholder}
                items={genderOptions}
                onValueChange={(value) => setData({ ...data, gender: value })}
                value={data.gender}
                style={{ ...pickerStyle }}
              />
            </View>
            <TextInput
              style={styles.inputTwo}
              placeholder="Height (cms)"
              keyboardType="numeric"
              placeholderTextColor={"#868181"}
              value={data.height}
              onChangeText={(text) => handleHeightChange(text)}
            />
          </View>
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={fintessLevelPlaceholder}
              items={fitnessLevelOptions}
              onValueChange={(value) =>
                setData({ ...data, fitnessLevel: value })
              }
              value={data.fitnessLevel}
              style={{ ...pickerStyle }}
            />
          </View>
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={trainingLevelPlaceholder}
              items={trainingLevelOptions}
              onValueChange={(value) =>
                setData({ ...data, trainingLevel: value })
              }
              value={data.trainingLevel}
              style={{ ...pickerStyle }}
            />
          </View>
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={goalPlaceholder}
              items={goalOptions}
              onValueChange={(value) => setData({ ...data, goal: value })}
              value={data.goal}
              style={{ ...pickerStyle }}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton size="large" handlePress={handleComplete}>
            Complete
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default userDetails;

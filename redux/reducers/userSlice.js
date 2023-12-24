import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  name: "",
  profile: {
    height: "",
    weight: "",
    gender: "",
    fitnessLevel: "",
    trainingLevel: "",
    goal: "",
    dateOfBirth: "",
    profilePicture: "",
    description: "",
  },
  email: "",
  connectionsSent: [],
  connections: [],
  connectionsRecieved: [],
  workouts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.profile = action.payload.profile;
      state.email = action.payload.email;
      state.connectionsSent = [
        ...state.connectionsSent,
        action.payload.connectionsSent,
      ];
      state.connections = [
        ...state.connections,
        action.payload.connectionsSent,
      ];
      state.connectionsRecieved = [
        ...state.connectionsRecieved,
        action.payload.connectionsRecieved,
      ];
      state.workouts = action.payload.workouts;
    },
    setWorkout: (state, action) => {
      state.workouts = state.workouts.map((workout) => {
        if (workout._id === action.payload._id) {
          workout = { ...action.payload };
        }
      });
    },
  },
});

export const { setToken, setUser, setWorkout } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user;
export const selectUserWorkouts = (state) => state.user.workouts;

export default userSlice.reducer;

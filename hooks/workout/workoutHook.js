import axios from "axios";
import { DEV_ENDPOINT } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setWorkout } from "../../redux/reducers/userSlice";

export const useUpdateWorkout = () => {
  const authToken = useSelector(selectToken);
  const dispatch = useDispatch();
  const updateWorkout = async (updatedWorkout) => {
    try {
      const response = await axios.patch(
        `${DEV_ENDPOINT}/workouts/${updatedWorkout._id}`,
        {
          ...updatedWorkout,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const workout = response.data.data.data;
      dispatch(setWorkout({ ...workout }));

      return { success: true, data: response.data };
    } catch (error) {
      console.log("Failed to load exercise data.", error);
      return { success: false, error: error };
    }
  };

  const getWorkout = async (updatedWorkout) => {
    try {
      const response = await axios.get(
        `${DEV_ENDPOINT}/workouts/${updatedWorkout._id}`,

        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const workout = response.data.data.data;
      dispatch(setWorkout({ ...workout }));

      return { success: true, data: response.data };
    } catch (error) {
      console.log("Failed to load exercise data.", error);
      return { success: false, error: error };
    }
  };

  return { updateWorkout, getWorkout };
};

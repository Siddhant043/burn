import axios from "axios";
import { DEV_ENDPOINT } from "@env";
import { useEffect, useState } from "react";

export const useExerciseData = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getAllExercises = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${DEV_ENDPOINT}/exercises?page=0`);
      const exercises = response.data.data.docs;
      setExercises(exercises);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("Failed to load exercise data.", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllExercises();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    getAllExercises();
  };

  return { data: exercises, isLoading, error, refetch };
};

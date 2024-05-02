import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useDataFetch = (param: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse<any, any>>();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://swapi.py4e.com/api/${param}`)
      .then(response => {
        setResponse(response.data);
        console.log(response.data), "77777777777777777777777777";
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        Alert.alert("Something went wrong!", "Please try again later");
      })
      .finally(() => setIsLoading(false));
  }, [param]);

  return { response, isLoading };
};
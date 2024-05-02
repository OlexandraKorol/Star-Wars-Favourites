import axios from "axios";
import { useEffect, useState } from "react";

export const useDataFetch = (param: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios.get(`https://swapi.py4e.com/api/${param}`);

        setResponse(result.data);
        setIsError(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [param]);

  return { response, isLoading, isError};
};

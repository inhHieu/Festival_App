import { useEffect, useState } from "react";
import axios from "axios";

function useGetData(apiUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const resdata = response.data;
        setData(data.concat(resdata));
        setLoading(false);
        // console.log(response.data)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, [apiUrl]);

  return [data, loading, error];
}

export default useGetData;
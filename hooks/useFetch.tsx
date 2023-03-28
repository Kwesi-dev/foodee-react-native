import axios from "axios";
import React, { useEffect, useState } from "react";

type hookType = {
  url: string;
};
const useFetch = ({ url }: hookType) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "407b59c589msh72abeddf0183ee1p13b03fjsnfd08cd8d72a5",
            "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
          },
        });
        setData(res.data);
      } catch {
        setError(true);
      } finally {
        setLoading(true);
      }
    };
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
};

export default useFetch;

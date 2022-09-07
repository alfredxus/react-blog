import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const opts = { signal: abortCont.signal };

    fetch(url, opts)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from database");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError'){
          //console.log('fetch aborted')
        } else {
          setLoading(false);
          setError(err.message);
        }
      });
      return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        setJobs(await response.json());
      } else {
        setIsLoading(false);
        setIsError(true);
        return;
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return [isLoading, isError, jobs];
};

export default useFetch;

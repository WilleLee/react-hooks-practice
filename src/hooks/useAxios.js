import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [triggerRefetch, setTriggerRefetch] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTriggerRefetch(Date.now());
  };
  useEffect(() => {
    if (!opts.url) return;
    axiosInstance(opts.url)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [triggerRefetch]);
  return { ...state, refetch };
};

export default useAxios;

import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getLocalStorageValue } from "../db/localStorage";
import { baseApi } from "../apis";

const getVisitorId = () => {
  let visitorId = getLocalStorageValue("visitorId");
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem("visitorId", visitorId);
  }
  return visitorId;
};

const usePageTracking = (path: string) => {
  useEffect(() => {
    const handlePost = async () => {
      const visitorId = getVisitorId();
      const payload = {
        visitorId,
        path,
        timestamp: new Date().toISOString(),
      };
      await axios.post(`${baseApi}/user-track`, payload);
    };
    handlePost();
  }, [path]);
};

export default usePageTracking;

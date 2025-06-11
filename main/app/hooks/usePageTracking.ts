"use client";

import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getLocalStorageValue, setLocalStorage } from "../db/localStorage";
import { baseApi } from "../apis";
const key = "visitorId";

const getVisitorId = () => {
  let visitorId = getLocalStorageValue(key);
  if (!visitorId) {
    visitorId = uuidv4();
    setLocalStorage(key, visitorId);
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
      };
      await axios.post(`${baseApi}/user-track`, payload);
    };
    handlePost();
  }, [path]);
};

export default usePageTracking;

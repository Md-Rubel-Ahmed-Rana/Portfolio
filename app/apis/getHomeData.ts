import axios from "axios";
export const getHomeData = async () => {
  const res = await axios.get(
    "https://portfolio-backend-v2-p89h.onrender.com/api/v2/util"
  );
  const data = await res.data.data;
  return data;
};

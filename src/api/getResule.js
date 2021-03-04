import { useCallback, useState } from "react";
import { message } from "antd";
import axios from "axios";

const useGetResule = () => {
  const [data, setData] = useState();
  const [state, setState] = useState({ loading: false, status: null });

  const getData = async (math_id) => {
    var options = {
      method: "GET",
      url: `https://stroccoli-futbol-science-v1.p.rapidapi.com/s1/stats/${math_id}`,
      headers: {
        "x-rapidapi-key": "546f100a1dmsh9745ad0b3391a47p187b51jsne1343c9ff1eb",
        "x-rapidapi-host": "stroccoli-futbol-science-v1.p.rapidapi.com",
      },
    };
    setState({ ...state, loading: true });
    try {
      const res = await axios.request(options);

      setState({ loading: false, status: true });
      if (res.data.length > 0) {
        setData(res.data);

        return res?.data;
      }
    } catch (error) {
      console.error(error);
      message.error("เชื่อมเอพีไอตารางบอลเจ๊ง");
      setState({ loading: false, status: false });

      return;
    }
  };

  return [data, getData, state.loading, state.status];
};

export default useGetResule;

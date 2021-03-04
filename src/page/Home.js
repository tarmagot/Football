import React, { useState, useEffect } from "react";
import { Headers, HomeMain, Layout } from "../component";
import dateFomat from "../funtion/formatDate";
import getFootball from "../api/getFootball";
import { db } from "../firbase/config";

const Home = () => {
  const [premier, getDataFootball, loading] = getFootball();

  //   const [dataFootball, setDataFootball] = useState();

  const read = () => {
    let starCountRef = db.ref("name");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log("snapshot", data);
    });
  };

  const fetchMath = async (a, b) => {
    await getDataFootball(a, b);
  };
  useEffect(() => {
    let mounted = true;
    let nowDay = dateFomat.FormatPlusDate(new Date(), null, null, -1);
    let nextDay = dateFomat.FormatPlusDate(new Date(), null, null, 2);

    if ((mounted = true)) {
      fetchMath(nowDay, nextDay);
    }
    return () => {
      mounted = false;
    };
  }, []);
  console.log("football", premier);
  return (
    <Layout head={<Headers />} mainHome={<HomeMain premier={premier} />} />
  );
};

export default Home;

import React, { useEffect } from "react";
import getResult from "../../../api/getResule";
import "../../../style/Score.css";

const Score = (props) => {
  const { data } = props;
  const [results, getResults, loading] = getResult();
  console.log("results", results);
  console.log("data", data);

  const fetchResult = async (value) => {
    await getResults(value);
  };
  useEffect(() => {
    let mounted = true;
    let match_id = data.match_id;
    console.log("match_id", match_id);
    if ((mounted = true)) {
      fetchResult(match_id);
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="contain">
      <div className="tTeam">
        <label>{data.home_team.name.abbrev}</label>
      </div>
      <div className="tScore">
        <label>VS</label>
      </div>
      <div className="tTeam">{data.visitant_team.name.abbrev}</div>
    </div>
  );
};

export default Score;

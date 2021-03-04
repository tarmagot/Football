import React from "react";
import { Image } from "../../component";
import Score from "../content/nameScoreVs/score";
import "../../style/BallContent.css";

const ballCon = (mathData) => {
  const data = mathData.mathData;

  return (
    <div className="layout">
      <div>
        <Image url={data.home_team.image} />
      </div>
      <div>
        <Score data={data} />
      </div>
      <div>
        <Image url={data.visitant_team.image} />
      </div>
    </div>
  );
};

export default ballCon;

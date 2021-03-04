import React from "react";
import _ from "lodash";
import { BallCon } from "../../component";

const mainHome = (props) => {
  const { premier } = props;

  const renderPremier = (val) => (
    <div key={val.eventkey}>
      <BallCon mathData={val} />

      {console.log("val", val)}
    </div>
  );
  return (
    <div>
      {!_.isNil(premier) ? premier.map((item) => renderPremier(item)) : ""}
    </div>
  );
};

export default mainHome;

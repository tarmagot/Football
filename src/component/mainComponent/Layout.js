import React from "react";
import { Layout } from "antd";
import "../../style/Layout.css";
const Layouts = (props) => {
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <div className="grid-container">
        <div className="head">{props.head}</div>
        <div className="menu">menu</div>
        <div className="main">{props.mainHome}</div>
        <div className="foot">foot</div>
      </div>
    </Layout>
  );
};

export default Layouts;

Layouts.defaultProps = {
  head: "-",
};

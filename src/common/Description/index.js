import React from "react";
import "./index.css";
import "../../common.css";

const Description = props => {
const { } = props;
  const { HEAD_1, DESC_1, HEAD_2, DESC_2, HEAD_3, DESC_3, HEAD_4, DESC_4, HEAD_5, DESC_5, HEAD_6, DESC_6 } = props.dataLocale || {};
  return (
    <div className="description-wrapper">
		<div className="head bold">{HEAD_1}</div>
		<div className="desc">{DESC_1}</div>
		<div className="head bold">{HEAD_2}</div>
		<div className="desc">{DESC_2}</div>
		<div className="head bold">{HEAD_3}</div>
		<div className="desc">{DESC_3}</div>
		<div className="head bold">{HEAD_4}</div>
		<div className="desc">{DESC_4}</div>
		<div className="head bold">{HEAD_5}</div>
		<div className="desc">{DESC_5}</div>
		<div className="head bold">{HEAD_6}</div>
		<div className="desc">{DESC_6}</div>
    </div>
  );
}
export default Description;

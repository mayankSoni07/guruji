import React from "react";
import "./index.css";
import "../../common.css";
import { HEADER_LINKS } from '../../utils/constants';

const Description = props => {
	return (
		<div className="description-wrapper">
			{HEADER_LINKS.map((linkData, index) => {
				if (linkData.active) {
					return <div id={linkData.id} key={index}>
						<div className="head bold">{props?.dataLocale?.[linkData?.header]}</div>
						<div className="desc">{props?.dataLocale?.[linkData?.description]}</div>
					</div>
				} else return <></>;
			})}
		</div>
	);
}
export default Description;

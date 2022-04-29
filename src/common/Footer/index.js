import React from "react";

import "./index.css";
import "../../common.css";

const Footer = props => {
	const { dataLocale } = props;
  const { ADDRESS, CONTACT_US, ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_LINE_3, ADDRESS_LINE_4 } = dataLocale || {};
  return (
    <div className="footer-wrapper shadow">
			<div className="display-flex justify-space-around">
        <div>
          <div className="contactus-text bold mb-10">{ADDRESS} &#x1F4CD;</div>
          <div className="address-text">{ADDRESS_LINE_1}</div>
          <div className="address-text">{ADDRESS_LINE_2}</div>
          <div className="address-text">{ADDRESS_LINE_3}</div>
          <div className="address-text">{ADDRESS_LINE_4}</div>
        </div>
        <div>
          <div className="contactus-text bold mb-10">{CONTACT_US} &#x260E;</div>
          <div className="address-text">&#x1F4DE; 9999999999</div>
          <div className="address-text display-flex align-center"><span className="contactus-text mr-5">&#x2709;</span> abc@xyz.com</div>
        </div>
			</div>
    </div>
  );
}
export default Footer;

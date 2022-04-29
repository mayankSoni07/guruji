import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import NIMBARK_SYMBOL from '../../images/NimbarkSymbol.png';
import "./index.css";
import "../../common.css";

const Header = props => {
	const { history } = props;
	const queryLang = history?.location?.search?.split("lang=")?.[1];
  const { SELECT_LANGUAGE, AKHIL_BHARATIYA_NIMBARKACHARYA_PEETH, SALEMABAD_RAJASTHAN } = props.dataLocale || {};
  return (
    <div className="header-wrapper shadow">
			<div className="display-flex justify-space-between align-center">
				<img className="symbol-img" src={NIMBARK_SYMBOL} onClick={() => window.location.href = `?lang=${queryLang}`} />
				<div>
					<DropdownButton variant="" title={queryLang ? queryLang === "hi" ? "हिन्दी" : "English" : SELECT_LANGUAGE}>
						<Dropdown.Item href="?lang=hi">हिन्दी</Dropdown.Item>
						<Dropdown.Item href="?lang=en">English</Dropdown.Item>
					</DropdownButton>
				</div>
			</div>
			<div className="text-center title">{AKHIL_BHARATIYA_NIMBARKACHARYA_PEETH}</div>
			<div className="text-center sub-title">{SALEMABAD_RAJASTHAN}</div>
    </div>
  );
}
export default Header;

import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { HEADER_LINKS } from '../../utils/constants';
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
				<img alt="NIMBARK_SYMBOL" className="symbol-img" src={NIMBARK_SYMBOL} onClick={() => window.location.href = `?lang=${queryLang}`} />
				<div>
					<DropdownButton variant="" title={queryLang ? queryLang === "hi" ? "हिन्दी" : "English" : SELECT_LANGUAGE}>
						<Dropdown.Item href="?lang=hi">हिन्दी</Dropdown.Item>
						<Dropdown.Item href="?lang=en">English</Dropdown.Item>
					</DropdownButton>
				</div>
			</div>
			<div className="text-center title">{AKHIL_BHARATIYA_NIMBARKACHARYA_PEETH}</div>
			<div className="text-center sub-title">{SALEMABAD_RAJASTHAN}</div>
			{HEADER_LINKS && <div className="display-flex justify-space-around mt-5">
				{HEADER_LINKS.map((linkData, index) => {
					if (linkData.active) {
						return <a key={index} href="javascript:void(0)" className="header-link" onClick={e => {
							const ele = document.getElementById(linkData.id);
							if (ele) window?.scroll({ top: document?.getElementById?.(linkData?.id)?.offsetTop - 150 });
						}}>{linkData.headerTitle}</a>
					}
					return <></>;
				})}
			</div>}
		</div>
	);
}
export default Header;

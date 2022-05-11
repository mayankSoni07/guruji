import React from "react";
import Description from '../common/Description';
import "./WebMain.css";
import "../common.css";

import RADHA_MADHAV_JI from '../images/RadhaMadhavJi.jpeg';
import BOTH_GURU_JI from '../images/BothGuruji.jpeg';
import GURUJI from '../images/Guruji.jpeg';
import NIMBARK_MAHAL from '../images/NimbarkMahal.jpeg';
import MAHAL_GATE from '../images/MahalGate.jpeg';
import SHALIGRAM_JI from '../images/ShaligramJi.jpeg';
import GURUJI_1 from '../images/Guruji1.jpeg';
import GURUJI_2 from '../images/Guruji2.jpeg';

export default function WebMain(props) {
  const { dataLocale, isMobile } = props;
  const { YUGAL_NAME_MAHAMANTRA, RADHE_KRISHNA_MANTRA_LINE_1, RADHE_KRISHNA_MANTRA_LINE_2, RADHE_KRISHNA_MANTRA_LINE_3, RADHE_KRISHNA_MANTRA_LINE_4, SHRI_JI_MAHARAJ } = dataLocale || {};

  return (
    <div className="main">
      <img className="width-max shadow img-radha-madhav" src={RADHA_MADHAV_JI} />
      <div className="bold text-center radhe-krishna-text-header">{YUGAL_NAME_MAHAMANTRA}</div>
      {isMobile ? <>
        <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_1}</div>
        <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_2}</div>
        <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_3}</div>
        <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_4}</div>
      </> : <>
        <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_1}{RADHE_KRISHNA_MANTRA_LINE_2}</div>
      <div className="bold text-center radhe-krishna-text">{RADHE_KRISHNA_MANTRA_LINE_3}{RADHE_KRISHNA_MANTRA_LINE_4}</div>
      </>}
      <img className="width-max shadow img-both-guruji" src={BOTH_GURU_JI} />
      <Description dataLocale={dataLocale} />
      <div className="bold text-center radhe-krishna-text">{SHRI_JI_MAHARAJ}</div>
      {/* Images start here */}
      <div className="img-wrapper"><img className="width-max shadow img" src={GURUJI_2} /></div>
      <div className="img-wrapper"><img className="width-max shadow img" src={GURUJI_1} /></div>
      <div className="img-wrapper"><img className="width-max shadow img" src={GURUJI} /></div>
      <div className="img-wrapper"><img className="width-max shadow img" src={NIMBARK_MAHAL} /></div>
      <div className="img-wrapper"><img className="width-max shadow img" src={MAHAL_GATE} /></div>
      <div className="img-wrapper"><img className="width-max shadow img" src={SHALIGRAM_JI} /></div>
    </div>
  );
}

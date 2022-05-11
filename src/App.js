import React, { useEffect } from "react";
import * as UTILS from "./utils/utils";
import LOCALE from './locale';
import WebMain from "./web/WebMain";
// import MsiteMain from "./msite/MsiteMain";

import Header from './common/Header';
import Footer from './common/Footer';

const App = (props) => {
  const { history } = props;
  const queryLang = history?.location?.search?.split("lang=")?.[1];
  const dataLocale = LOCALE[queryLang];

  const setLang = (lang) => {
    window.localStorage.setItem("lang", lang);
    history.push(`?lang=${lang}`);
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem("lang");
    if (queryLang && queryLang !== localLang) {
      setLang(queryLang);
    } else if (!queryLang && localLang) {
      setLang(localLang);
    } else if (!queryLang && !localLang) {
      setLang("hi");
    }
  }, []);

  return (
    <div>
      <Header dataLocale={dataLocale} history={history} />
      <WebMain
        {...props}
        dataLocale={dataLocale}
        isMobile={UTILS.isMobile()}
      />
      {/* {UTILS.isMobile() ? (
        <MsiteMain
          {...props}
          dataLocale={dataLocale}
          isMobile={UTILS.isMobile()}
        />
      ) : (
        <WebMain
          {...props}
          dataLocale={dataLocale}
          isMobile={UTILS.isMobile()}
        />
      )} */}
      <Footer dataLocale={dataLocale} />
    </div>
  );
};
export default App;

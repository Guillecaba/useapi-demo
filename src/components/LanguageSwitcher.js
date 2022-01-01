import React, { useEffect } from "react";

import i18n from "../i18n";
import { normalizeLanguages } from "../utils";

const LanguageSwitcher = () => {
  let lang =
    localStorage.getItem("language") ||
    normalizeLanguages(window.navigator.language);
  useEffect(() => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  }, [lang]);
  return <React.Fragment />;
};

export default LanguageSwitcher;

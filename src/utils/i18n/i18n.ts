import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { AppDefaults, WebLanguages, WebLanguageType } from "../constants/i18n";
import {  GetLanguage } from "../helpers/helpers";

const resources: any = {};
WebLanguages.map((item: WebLanguageType) => {
  resources[item.key] = {
    translation: item.translations,
  };
  return item;
});

i18n.use(LanguageDetector).init({
  resources,
  lng: GetLanguage(),
  fallbackLng: [AppDefaults.language],
});

export default i18n;

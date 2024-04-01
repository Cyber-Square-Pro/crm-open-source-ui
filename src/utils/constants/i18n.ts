import KO_Translation from "../i18n/ko";
import EN_Translation from "../i18n/en";
import JP_Translation from "../i18n/jp";

export type WebLanguageType = {
        key: string,
        name: string,
        translations: any,
}

export const AppDefaults = {
    language: "en",
    availableCountry: "kp",
};

export const WebLanguages : WebLanguageType[] = [
    {
      key: "en",
      name: "English",
      translations: EN_Translation,
    },
    {
      key: "ko",
      name: "Korean",
      translations: KO_Translation,
    },
    {
      key: "jp",
      name: "japanese",
      translations: JP_Translation,
    },
];
  
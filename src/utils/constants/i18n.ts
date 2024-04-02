import EN_Translation from "../i18n/en";

export type WebLanguageType = {
        key: string,
        name: string,
        translations: any,
}

export const AppDefaults = {
    language: "en",
    availableCountry: "en",
};

export const WebLanguages : WebLanguageType[] = [
    {
      key: "en",
      name: "English",
      translations: EN_Translation,
    },
];
  
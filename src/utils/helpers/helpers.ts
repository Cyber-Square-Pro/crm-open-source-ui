import {
    AppDefaults,
    authAccessToken,
    authRefreshToken,
  } from "../constants/constant";
  import Cookies from "js-cookie";
  import { WebLanguages } from "../constants/i18n";
  import moment from "moment";
  
  export const GetLanguage = () => {
    return AppDefaults.language;
  };
  
  export const AppLanguageKeys = WebLanguages.map((lang) => lang.key);
  
  export const getAccessToken = (): string | null => {
    const accessToken = Cookies.get(authAccessToken);
    return accessToken ? accessToken : null;
  };
  
  export const getRefreshToken = () => {
    const refreshToken = Cookies.get(authRefreshToken);
    return refreshToken ? refreshToken : null;
  };
  
  export const textSplit = (text: string, splitLength = 8) => {
    return text && text.length > splitLength * 2
      ? `${text.slice(0, splitLength)}...${text.slice(-splitLength)}`
      : text;
  };
  
  
  export const formatDate = (date : any) => {
    return moment(
      date,
      "YYYY-MM-DD"
    ).isValid()
      ? moment(
        date|| ""
        ).format("MMMM Do YYYY, h:mm:ss a")
      : ""
  }
  
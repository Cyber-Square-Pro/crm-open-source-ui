export const authAccessToken = "auth.access-token";
export const authRefreshToken = "auth.refresh-token";

export const API_END_POINT = process.env.REACT_APP_API_END_POINT;
export const COUNTRY_ICONS = process.env.REACT_APP_COUNTRY_ICONS;

export const AppDefaults = {
    language: localStorage.getItem("lang") || "en",
    availableCountry: "kp",
};

export const STATE_CODES = {
    UNAUTHORIZED: 401,
    FORBIDEN: 403,
};

export const PAGE_SIZE = [
    {
      label: "5",
      value: "5",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "15",
      value: "15",
    },
    {
      label: "20",
      value: "20",
    },
];

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_SET_TOTAL_PAGES = 1;
export const TOTAL_PAGES = 1;
export const TOTAL = 1;
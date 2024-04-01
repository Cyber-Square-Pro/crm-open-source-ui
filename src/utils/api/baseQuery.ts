import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";
import { redirect } from "react-router";
import {
  API_END_POINT,
  authAccessToken,
  authRefreshToken,
  STATE_CODES,
} from "../constants/constant";
import { ROUTES } from "../constants/routes";
import { getAccessToken, getRefreshToken } from "../helpers/helpers";

const mutex = new Mutex();
const baseUrl = `${API_END_POINT}api/v1/`;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    headers.set("accesstoken", getAccessToken() || "");
    return headers;
  },
});

const refreshQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    headers.set("refreshtoken", getRefreshToken() || "");
    return headers;
  },
});

const customFetchBase = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === STATE_CODES.UNAUTHORIZED) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await refreshQuery(
          {
            url: "login/get-new-access-token",
            method: "post",
            body: { language: localStorage.getItem('lang') || "en" },
          },
          api,
          extraOptions
        );
        if (refreshResult?.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          if (getAccessToken()) {
            Cookies.remove(authAccessToken);
            Cookies.remove(authRefreshToken);
            window.location.href = ROUTES.base;
          } else {
            Cookies.remove(authAccessToken);
            Cookies.remove(authRefreshToken);
            redirect(ROUTES.base);
          }
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;

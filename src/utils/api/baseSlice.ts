import { createApi } from "@reduxjs/toolkit/query/react";
import { mutations, queries } from "./apiDetails";
import { transformErrorResponse } from "./handleErrors";
import customFetchBase from "./baseQuery";
import { CustomJsonObject } from "../types/common";

export const baseSliceAPI = createApi({
  reducerPath: "baseSlice",
  baseQuery: customFetchBase,
  tagTypes: ["Post", "ORDER"],
  endpoints: (build) => {
    const endPoints: CustomJsonObject<any> = {};

    Object.keys(mutations).forEach((key: string) => {
      const apiDetails = mutations[key];
      const { tags = [] } = apiDetails;
      endPoints[key] = build.mutation({
        query: (body: any) => {
          const additionaloptions = body?.additionalApiOptions ?? {};
          body?.additionalApiOptions && delete body?.additionalApiOptions
          return {
            url: apiDetails.url,
            method: apiDetails.method,
            body: { ...body, language: localStorage.getItem('lang') || "en" },
            ...additionaloptions
          };
        },
        invalidatesTags: tags as any,
        transformResponse: (response, meta, arg) =>
          apiDetails.transformResponse(response),
        transformErrorResponse: (response, meta, arg) =>
          apiDetails.transformErrorResponse
            ? apiDetails.transformErrorResponse(response)
            : transformErrorResponse(response),
      });
    });

    Object.keys(queries).forEach((key) => {
      const apiDetails = queries[key];
      const { tags = [] } = apiDetails;
      endPoints[key] = build.query({
        query: (body: any) => {
          const additionaloptions = body?.additionalApiOptions ?? {};
          body?.additionalApiOptions && delete body?.additionalApiOptions
          return {
            url: apiDetails.url,
            method: apiDetails.method,
            body: { ...body, language: localStorage.getItem('lang') || "en" },
            ...additionaloptions
          };
        },
        providesTags: tags as any,
        transformResponse: (response, meta, arg) =>
          apiDetails.transformResponse(response),
        transformErrorResponse: (response, meta, arg) =>
          transformErrorResponse(response),
      });
    });

    return endPoints;
  },
});

export const {
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLoginMutation,
  usePrefetch,
  useCartMutation,
  useInitiateMutation,
  useProfileQuery,
  useProfileMutation
} = baseSliceAPI;

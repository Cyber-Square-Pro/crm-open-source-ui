import { commonTransform, customTransform } from "../handleTransformation";
import { loginTransform } from "./login";

export interface CustomEndPoints {
  [key: string]: CustomEndPoint;
}

export interface CustomEndPoint {
  url: string;
  method: string;
  tags?: string[];
  transformErrorResponse?: (res: any) => any;
  transformResponse: (res: any) => any;
}

export const mutations: CustomEndPoints = {
  sample: {
    url: "/sample",
    transformResponse: (res: any) => commonTransform(res),
    method: "POST",
  },
  login: {
    url: "/login",
    transformResponse: (res) => loginTransform(res),
    method: "POST",
  },
  signUp: {
    url: "/register",
    transformResponse: (res) => commonTransform(res),
    method: "POST",
  },
  forgotPassword: {
    url: "/forgot-password",
    transformResponse: (res) => commonTransform(res),
    method: "POST",
  },
};

export const queries: CustomEndPoints = {
  profile: {
    url: "/profile",
    transformResponse: (res) => customTransform(res),
    method: "POST",
    tags: ["CART", "ORDER"],
  },
  countries: {
    url: "/country",
    transformResponse: (res) => customTransform(res),
    method: "POST",
  },
};

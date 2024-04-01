import Cookies from "js-cookie";
import { authAccessToken, authRefreshToken } from "../../constants/constant";
import { ROUTES } from "../../constants/routes";

export const loginTransform = (res : any) => {
    const { accessToken, refreshToken } = res.data;
    Cookies.set(authAccessToken, accessToken, { expires: 7 });
    Cookies.set(authRefreshToken, refreshToken, { expires: 7 });
    window.location.href = ROUTES.dashboard;
    return res;
};

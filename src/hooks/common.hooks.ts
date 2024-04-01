import { useLocation, useNavigate } from "react-router";

export default function useCommon() {
  const navigate = useNavigate();
  const location = useLocation();

  const backhandler = () => {
    navigate(-1);
  };

  const currentLocationState = () => {
    return location?.state;
  };

  return {
    backhandler,
    currentLocationState,
  };
}

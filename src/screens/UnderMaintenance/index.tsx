import { useDispatch } from "react-redux";
import { openDialog } from "../../redux/GlobalDialog";
import { useEffect } from "react";
import { GlobalDialog } from "../../components/organisms";

export default function UnderMaintenance() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      openDialog({
        background: true,
        element: (
          <div className="flex justify-center items-center ">
            
          </div>
        ),
        closeFunction: () => {}
      })
    );
  }, []);

  return <div></div>;
}

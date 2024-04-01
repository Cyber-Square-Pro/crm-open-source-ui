import { GridLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex w-full  justify-center pt-[40px] md:pt-[60px]">
      <GridLoader color="#ECBE44" />
    </div>
  );
}

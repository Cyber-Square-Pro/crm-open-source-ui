import { useEffect } from "react";

type RefType = React.MutableRefObject<HTMLElement | null>;

const useClickOutside = (ref: RefType, callback: () => void): void => {
  const handleClick = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useClickOutside;

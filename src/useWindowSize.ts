import { useState, useEffect } from "react";
import debounce from "./debounce";

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    const d = debounce(handleResize, 100);
    window.addEventListener("resize", d);
    window.addEventListener("orientationchange", d);
    return () => {
      window.removeEventListener("resize", d);
      window.removeEventListener("orientationchange", d);
    };
  }, []);
  return windowSize;
}

export default useWindowSize;
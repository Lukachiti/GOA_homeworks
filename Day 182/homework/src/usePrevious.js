import { useEffect, useRef } from "react";

function usePrevious(value) {

  const ref = useRef();

  useEffect(() => {
    let prevValue = ref.current;
    ref.current = value;
  }, [value]);

  return prevValue;
}

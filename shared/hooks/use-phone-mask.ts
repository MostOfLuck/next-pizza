import { useState } from "react";
import { useIMask } from "react-imask";

export const usePhoneMask = () => {
  const [opts] = useState({ mask: "+{420} (000) 000-000" });
  const {
    ref,
    maskRef,
    value,
    setValue,
    unmaskedValue,
    setUnmaskedValue,
    typedValue,
    setTypedValue,
  } = useIMask(opts);

  return {
    ref,
    value,
    setValue,
    unmaskedValue,
    setUnmaskedValue,
    typedValue,
    setTypedValue,
  };
};

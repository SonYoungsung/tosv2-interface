import { useEffect } from "react";
import { PageKey } from "types";
import { InputKey } from "types/atom";
import useBondInput from "./bond/useBondInput";
import useStakeInput from "./stake/useStakeInput";
import useModal from "./useModal";

function useInput(key: PageKey, subKey: InputKey) {
  const { inputValue, value, setValue, resetValue } = useStakeInput(subKey);
  const {
    inputValue: bondInputValue,
    value: bondValue,
    setValue: setBondvalue,
    resetValue: setResetBondValue,
  } = useBondInput(subKey);

  switch (key) {
    case "Stake_screen":
      return {
        inputValue,
        value,
        setValue,
        setResetValue: resetValue,
      };
    case "Bond_screen":
      return {
        inputValue: bondInputValue,
        value: bondValue,
        setValue: setBondvalue,
        setResetValue: setResetBondValue,
      };
    default:
      return {
        inputValue: undefined,
        value: undefined,
        setValue: undefined,
      };
  }
}

export default useInput;

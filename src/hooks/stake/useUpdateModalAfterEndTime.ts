import commafy from "@/components/commafy";
import { convertNumber, convertToWei } from "@/components/number";
import { convertTimeStamp, getNowTimeStamp } from "@/components/time";
import constant from "constant";
import { BigNumber } from "ethers";
import useStakeId from "hooks/contract/useStakeId";
import useCallContract from "hooks/useCallContract";
import useInput from "hooks/useInput";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import useStosReward from "./useStosReward";

type Balance = {
  tos: string;
  ltos: string;
  stos: string;
};

type UseUpdateMAfterEndTime = {
  newBalance: Balance;
  newEndTime: string;
  newEndTimeWithoutStos: string;
  inputTosAmount: string;
  tosValue: string;
};

const defaultBalanceValue = {
  tos: "0",
  stos: "0",
  ltos: "0",
};

function useUpdateModalAfterEndTime(addTos: boolean): UseUpdateMAfterEndTime {
  const [newBalance, setNewBalance] = useState<Balance>(defaultBalanceValue);
  const [newEndTime, setNewEndTime] = useState<string>("-");
  const [newEndTimeWithoutStos, setNewEndTimeWithoutStos] =
    useState<string>("-");
  const [tosValue, setTosValue] = useState<string>("-");
  const { StakingV2Proxy_CONTRACT, LockTOS_CONTRACT } = useCallContract();
  const { stakeId } = useStakeId();
  const { inputValue } = useInput("Stake_screen", "relock_modal");
  const [inputTosAmount, setInputTosAmount] = useState<number>(0);
  const { stosReward } = useStosReward(
    inputTosAmount,
    inputValue.stake_relockModal_period
  );

  //new
  useEffect(() => {
    async function fetchRolockModalData() {
      if (StakingV2Proxy_CONTRACT && stakeId && inputValue) {
        //new balance
        //case1
        //LTOS relock
        if (!addTos) {
          const ltosAmount = convertToWei(
            inputValue.stake_relockModal_ltos_balance
          );
          const possibleTOSAmount =
            await StakingV2Proxy_CONTRACT.getLtosToTosPossibleIndex(ltosAmount);
          const tos =
            convertNumber({
              amount: possibleTOSAmount.toString(),
              localeString: true,
            }) || "0";

          setTosValue(tos);
          setInputTosAmount(Number(tos.replaceAll(",", "")));

          return setNewBalance({
            tos,
            ltos: "-",
            stos: stosReward,
          });
        }

        //case2
        //STOS relock
        if (addTos) {
          const tosAmount = convertToWei(
            inputValue.stake_relockModal_tos_balance
          );
          const possibleLTOSAmount =
            await StakingV2Proxy_CONTRACT.getTosToLtosPossibleIndex(tosAmount);
          const remainedLTOS = await StakingV2Proxy_CONTRACT.remainedLtos(
            stakeId
          );
          const totalAmount =
            BigNumber.from(possibleLTOSAmount).add(remainedLTOS);
          const ltos =
            convertNumber({
              amount: totalAmount.toString(),
              localeString: true,
            }) || "-";
          const tosValueBN =
            await StakingV2Proxy_CONTRACT.getLtosToTosPossibleIndex(
              totalAmount
            );
          const tosValue =
            convertNumber({
              amount: tosValueBN.toString(),
              localeString: true,
            }) || "-";

          setTosValue(tosValue);
          setInputTosAmount(
            Number(inputValue.stake_relockModal_tos_balance.replaceAll(",", ""))
          );

          return setNewBalance({
            tos: "0",
            ltos,
            stos: stosReward,
          });
        }
      }
    }
    fetchRolockModalData().catch((e) => {
      console.log("**useUpdateModalAfterEndTimeData2 err**");
      console.log(e);
      // return setNewBalance({
      //   tos: "-",
      //   ltos: "-",
      //   stos: "-",
      // });
    });
  }, [stakeId, StakingV2Proxy_CONTRACT, inputValue, stosReward, addTos]);

  useEffect(() => {
    async function fetchEndTime() {
      if (LockTOS_CONTRACT && inputValue?.stake_relockModal_period) {
        //endTime
        const inputPeriod = inputValue.stake_relockModal_period;
        const sTosEpochUnit = await LockTOS_CONTRACT.epochUnit();
        const epochUnit = Number(sTosEpochUnit.toString());
        const now = getNowTimeStamp();
        const unlockTimeStamp = now + inputPeriod * epochUnit;
        const endTimeWithoutStos = convertTimeStamp(
          unlockTimeStamp,
          "YYYY. MM.DD. HH:mm"
        );
        setNewEndTimeWithoutStos(endTimeWithoutStos || "-");

        //old script
        const date =
          Math.floor((now + inputPeriod * epochUnit) / epochUnit) * epochUnit;
        const endTime = moment.unix(date).format("YYYY.MM.DD");
        setNewEndTime(endTime || "-");
      }
    }
    fetchEndTime().catch((e) => {
      console.log("**useUpdateMAfterEndTime2 err**");
      console.log(e);
    });
  }, [LockTOS_CONTRACT, inputValue.stake_relockModal_period]);

  return {
    newBalance,
    newEndTime,
    newEndTimeWithoutStos,
    inputTosAmount: commafy(inputTosAmount),
    tosValue,
  };
}

export default useUpdateModalAfterEndTime;

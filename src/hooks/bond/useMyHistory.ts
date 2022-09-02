import { convertNumber } from "@/components/number";
import {
  convertTimeStamp,
  getNowTimeStamp,
  getTimeLeft,
  isTimeOver,
} from "@/components/time";
import { useQuery } from "@apollo/client";
import { useWeb3React } from "@web3-react/core";
import { GET_BOND_MYHISTORY } from "graphql/bond/getBond";
import { GET_TOKEN_PRICE } from "graphql/general/getTokenPrice";
import useLockTOS from "hooks/contract/useLockTOS";
import useCallContract from "hooks/useCallContract";
import moment from "moment";
import { useEffect, useState } from "react";
import { GetMyHistory, MyCardProps } from "types/bond";

function useMyHistory() {
  const [cardList, setCardList] = useState<MyCardProps[] | undefined>(
    undefined
  );
  const { account } = useWeb3React();
  const { StakingV2Proxy_CONTRACT, LockTOS_CONTRACT } = useCallContract();
  const { epochUnit } = useLockTOS();

  const { data, loading, error } = useQuery(GET_BOND_MYHISTORY, {
    variables: {
      account,
    },
  });
  const { data: TokenData } = useQuery(GET_TOKEN_PRICE, {
    variables: {
      tokenId: "ethereum",
    },
  });

  useEffect(() => {
    const fetchListdata = async () => {
      if (data && account && TokenData) {
        const {
          getTokenPrice: { price: ethPrice },
        } = TokenData;
        const myHistoryData = data.getMyHistory;
        const result = myHistoryData.map(async (historyData: GetMyHistory) => {
          if (
            historyData.data &&
            historyData.blockTimestamp &&
            historyData.eventName &&
            StakingV2Proxy_CONTRACT &&
            LockTOS_CONTRACT
          ) {
            const { data, blockTimestamp, eventName } = historyData;
            const { ltos, marketId, tosPrice } = data;
            const convertedLtos = convertNumber({ amount: ltos.toString() });
            const stakeId = data?.stakeId;

            const bondPrice = (1 / tosPrice) * 1e18 * ethPrice;
            const lockId = await StakingV2Proxy_CONTRACT.connectId(stakeId);
            const tosBalance = await LockTOS_CONTRACT.balanceOfLockAt(
              lockId,
              blockTimestamp
            );

            let unlockTime = "-";
            let isOver = false;
            let lockUpPeriod = "5 Days";
            const hasPeriodWeeks = eventName === "StakedGetStosByBond";

            if (hasPeriodWeeks) {
              const nowTimeStmap = getNowTimeStamp();
              const unlockTimeStamp =
                nowTimeStmap + data?.periodWeeks * Number(epochUnit);
              unlockTime = `${convertTimeStamp(
                blockTimestamp,
                "YYYY. MM.DD. HH:mm"
              )}  ~ ${convertTimeStamp(unlockTimeStamp, "MM.DD. HH:mm")}`;
              const timeDiff = unlockTimeStamp - blockTimestamp;
              lockUpPeriod = `${Math.floor(timeDiff / 86400)} Days`;
              isOver = isTimeOver(Number(unlockTimeStamp));
            } else {
              //5days lockup
              unlockTime = `${convertTimeStamp(
                blockTimestamp,
                "YYYY. MM.DD. HH:mm"
              )} ~ ${getTimeLeft(blockTimestamp, 5, "MM.DD HH:mm")}`;
              isOver = isTimeOver(Number(blockTimestamp) + 432000);
            }

            const cardData: MyCardProps = {
              info: [
                {
                  title: "Staked",
                  content: `${convertedLtos} LTOS / ${
                    hasPeriodWeeks
                      ? convertNumber({ amount: tosBalance.toString() })
                      : "0"
                  } TOS`,
                },
                {
                  title: "Bond Price",
                  content: `$ ${bondPrice.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}`,
                },
                {
                  title: "Lock-Up Period",
                  content: lockUpPeriod,
                },
              ],
              tokenType: "ETH",
              lockUpDate: unlockTime,
              isOver,
            };
            return cardData;
          }
        });

        return setCardList(await Promise.all(result));
      }
    };
    fetchListdata().catch((e) => {
      console.log("**fetchListdata err**");
      console.log(e);
    });
  }, [
    account,
    data,
    TokenData,
    epochUnit,
    StakingV2Proxy_CONTRACT,
    LockTOS_CONTRACT,
  ]);

  return { cardList };
}

export default useMyHistory;

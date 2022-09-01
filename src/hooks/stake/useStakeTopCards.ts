import commafy from "@/components/commafy";
import useStakeV2 from "hooks/contract/useStakeV2";
import useCallContract from "hooks/useCallContract";
import usePrice from "hooks/usePrice";
import { useEffect, useState } from "react";
import { StakeTopCardProps } from "types/stake";

function useStakeTopCards() {
  const [stakeTopCards, setStakeTopCards] = useState<StakeTopCardProps[]>([
    {
      title: "Total Value Staked",
      price: "-",
      priceUnit: "$",
    },
    {
      title: "TOS APY",
      price: "-",
      priceUnit: "%",
    },
    {
      title: "LTOS Index",
      price: "-",
      priceUnit: "TOS",
    },
  ]);

  const { StakingV2Proxy_CONTRACT } = useCallContract();
  const { priceData } = usePrice();
  const { stakeV2 } = useStakeV2();

  useEffect(() => {
    const fetchData = async () => {
      if (StakingV2Proxy_CONTRACT && priceData) {
        const { tosPrice } = priceData;

        //Calculate TVS
        const totalLTOS = await StakingV2Proxy_CONTRACT.totalLtos();
        const possibleIndex = await StakingV2Proxy_CONTRACT.possibleIndex();
        const TVS = ((totalLTOS * 1e18) / (possibleIndex * 1e18)) * tosPrice;

        //Calculate TOS APY
        const rebasePerEpoch = await StakingV2Proxy_CONTRACT.rebasePerEpoch();
        const TOS_APY = (1 + rebasePerEpoch / 1e18) * 1095;

        setStakeTopCards([
          {
            title: "Total Value Staked",
            price: commafy(TVS),
            priceUnit: "$",
          },
          {
            title: "TOS APY",
            price: commafy(TOS_APY),
            priceUnit: "%",
          },
          {
            title: "LTOS Index",
            price: stakeV2?.ltosIndex || "-",
            priceUnit: "TOS",
          },
        ]);
      }
    };
    fetchData().catch((e) => {
      console.log("**useStakeTopCards err**");
      console.log(e);
    });
  }, [StakingV2Proxy_CONTRACT, priceData, stakeV2?.ltosIndex]);

  return { stakeTopCards };
}

export default useStakeTopCards;

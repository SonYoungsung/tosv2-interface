import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import useCallContract from "hooks/useCallContract";
import useContract from "hooks/useContract";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { useEffect, useState } from "react";

import CONTRACT_ADDRESS from "services/addresses/contract";
import TreasuryAbi from "services/abis/Treasury.json";

import {
  Dashboard_SmallCardArrType,
  Dashboard_SmallCardType,
} from "types/dashboard";
import SmallCard from "./SmallCard";
import useCardData from "hooks/dashboard/useCardData";
import { GET_DASHBOARD_CARD } from "graphql/dashboard/getDashboard";
import { useQuery } from "@apollo/client";
import commafy from "@/components/commafy";

const SmallCardContainer = () => {
  const [cardList, setCardList] = useState<
    Dashboard_SmallCardArrType | undefined
  >(undefined);
  const [width] = useWindowDimensions();
  const { Treasury_CONTRACT } = useCallContract();

  const { loading, error, data } = useQuery(GET_DASHBOARD_CARD, {
    variables: {
      period: "-1",
      limit: 1,
    },
  });

  // const { data, loading, error } = useCardData();
  // const { tosPrice, backingPerTos, ltosPrice, ltosIndex } = data;

  useEffect(() => {
    if (data) {
      const { tosPrice, backingPerTos, ltosPrice, ltosIndex } =
        data.getDashboardCard[0];
      const dummyData: Dashboard_SmallCardArrType = [
        {
          price: commafy(tosPrice) as string,
          priceUnit: "$",
          priceChangePercent: 15,
          title: "TOS Price",
        },
        {
          price: commafy(backingPerTos) as string,
          priceUnit: "ETH/TOS",
          priceChangePercent: -15,
          title: "Backing per TOS",
        },
        {
          price: commafy(ltosPrice) as string,
          priceUnit: "$",
          priceChangePercent: 15,
          title: "LTOS Price",
        },
        {
          price: commafy(ltosIndex) as string,
          priceUnit: "TOS",
          priceChangePercent: 15,
          title: "LTOS Index",
        },
      ];
      setCardList(dummyData);
    }
  }, [Treasury_CONTRACT, data]);

  if (width < 490) {
    return (
      <Flex
        flexDir={"column"}
        borderWidth={1}
        borderColor={"gray.300"}
        borderRadius={14}
      >
        {cardList?.map((cardData: Dashboard_SmallCardType, index: number) => {
          return (
            <Box key={`${cardData.title}_${index}`} w={"100%"} minW={"210px"}>
              <SmallCard
                price={cardData.price}
                priceChangePercent={cardData.priceChangePercent}
                title={cardData.title}
                priceUnit={cardData.priceUnit}
                style={
                  index === 0
                    ? { borderTopRadius: 14 }
                    : index === cardList.length - 1
                    ? { borderBottomRadius: 14 }
                    : {}
                }
              ></SmallCard>
            </Box>
          );
        })}
      </Flex>
    );
  }

  return (
    <SimpleGrid
      columnGap={"24px"}
      rowGap={"24px"}
      justifyContent="center"
      columns={width < 960 ? 2 : 4}
    >
      {cardList?.map((cardData: Dashboard_SmallCardType, index: number) => {
        return (
          <Box key={`${cardData.title}_${index}`} w={"100%"} minW={"210px"}>
            <SmallCard
              price={cardData.price}
              priceChangePercent={cardData.priceChangePercent}
              title={cardData.title}
              priceUnit={cardData.priceUnit}
            ></SmallCard>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default SmallCardContainer;
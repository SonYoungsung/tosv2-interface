import { Box, Flex, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import SubmitButton from "common/button/SubmitButton";
import TabButton from "common/button/TabButton";
import useStakeList from "hooks/stake/useStakeList";
import useWallet from "hooks/useWallet";
import StakeSortSelect from "pages/components/stake/StakeSortSelect";
import StakeCheckbox from "pages/components/bond/StakeCheckbox";
import { useState } from "react";
import StakeRadioGroup from "./BondRadioGroup";
import MsgComponent from "./MsgComponent";
import StakeCardSection from "./StakeCardSection";
import StakeTitle from "./StakeTitle";

function StakeCardContainer() {
  const { stakeCards, hasList } = useStakeList();
  const { account } = useWeb3React();
  const { tryActivation } = useWallet();

  return (
    <Flex mt={"48px"} w={"100%"} justifyContent={"center"} flexDir={"column"}>
      <Flex
        justifyContent={"space-between"}
        mt={"60px"}
        mb={"27px"}
        alignItems="center"
      >
        <StakeTitle></StakeTitle>
      </Flex>
      {!account ? (
        <Flex flexDir={"column"} alignItems={"center"}>
          <SubmitButton
            name="Connect Wallet"
            w={"240px"}
            h={"42px"}
            style={{ fontSize: 16 }}
            onClick={tryActivation}
          ></SubmitButton>
        </Flex>
      ) : hasList ? (
        <>
          <Flex
            flexDir={["column", "row", "row"]}
            justifyContent={"space-between"}
            mb={"27px"}
            alignItems="center"
          >
            <StakeCheckbox></StakeCheckbox>
            <Flex
              w={["100%", "400px", "500px"]}
              columnGap={["6px", "6px", "30px"]}
              justifyContent={"flex-end"}
              mt={["", "", ""]}
            >
              <StakeRadioGroup></StakeRadioGroup>
              <StakeSortSelect></StakeSortSelect>
            </Flex>
          </Flex>
          <StakeCardSection></StakeCardSection>
        </>
      ) : (
        <MsgComponent msg={"No Staking History"}></MsgComponent>
      )}
    </Flex>
  );
}

export default StakeCardContainer;

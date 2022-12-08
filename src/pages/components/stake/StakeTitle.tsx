import { Flex, Text, useMediaQuery, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import ARROW_RIGHT from "assets/icons/arrow-right.svg";
import { useState } from "react";
import SubmitButton from "common/button/SubmitButton";
import useModal from "hooks/useModal";
import useUserBalance from "hooks/useUserBalance";
import { useWeb3React } from "@web3-react/core";
import { selectedTxState } from "atom/global/tx";
import { useRecoilValue } from "recoil";

function StakeTitle() {
  const [radioValue, setRadioValue] = useState<"All" | "Bond" | "Stake">("All");
  const [smallerThan1040] = useMediaQuery("(max-width: 1040px)");

  const [smallerThan726] = useMediaQuery("(max-width: 726px)");
  const { openModal } = useModal("stake_stake_modal");
  const { colorMode } = useColorMode();
  const { userLTOSBalance, userSTOSBalance, userTOSBalance } = useUserBalance();
  const { account } = useWeb3React();
  const txPending = useRecoilValue(selectedTxState);

  return (
    <Flex
      // h={"31px"}
      textAlign={"center"}
      lineHeight={"31px"}
      flexDir={smallerThan726 ? "column" : "row"}
      justifyContent={"space-between"}
      w={"100%"}
    >
      <Flex
        justifyContent={smallerThan1040 ? "space-between" : {}}
        alignItems={"center"}
      >
        <Text
          fontSize={22}
          fontWeight={600}
          color={colorMode === "dark" ? "white.200" : "gray.800"}
          mr={"12px"}
        >
          My Staked
        </Text>

        {/* <Flex alignItems={"center"}>
          <Text fontSize={14} color={"blue.200"} mr={"6px"}>
            Balance : {userLTOSBalance || "-"} LTOS / {userSTOSBalance || "-"}{" "}
            sTOS / {userTOSBalance || "-"} TOS
          </Text>
          <Image src={ARROW_RIGHT} alt={"ARROW_RIGHT"}></Image>
        </Flex> */}
      </Flex>
      <Flex fontSize={14}>
        <SubmitButton
          name="Stake"
          w={smallerThan726 ? "100%" : ""}
          style={
            smallerThan1040
              ? { fontSize: 14, marginTop:smallerThan726? "20px":'', marginBottom: smallerThan726? "30px":'' }
              : { fontSize: 14 }
          }
          onClick={openModal}
          iconName={"Plus"}
          iconLocation={"left"}
          isDisabled={!account || txPending}
          isLoading={txPending}
        ></SubmitButton>
      </Flex>
    </Flex>
  );
}

export default StakeTitle;

import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useTheme,
  useColorMode,
  Link,
  Box,
  Input,
  Grid,
  GridItem,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";
// import { CloseIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedModalData, selectedModalState } from "atom//global/modal";
import useModal from "hooks/useModal";
import Image from "next/image";
import CLOSE_ICON from "assets/icons/close-modal.svg";
import CustomCheckBox from "common/input/CustomCheckBox";
import SubmitButton from "common/button/SubmitButton";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TextInput, BalanceInput } from "common/input/TextInput";
import TokenSymbol from "common/token/TokenSymol";
import question from "assets/icons/question.svg";
import useCallContract from "hooks/useCallContract";
import useBondModal from "hooks/bond/useBondModal";
import useInputData from "hooks/bond/useInputData";
import { inputBalanceState, inputState } from "atom/global/input";
import commafy from "@/components/commafy";
import { BondCardProps } from "types/bond";
import { convertToWei } from "@/components/number";
import { useWeb3React } from "@web3-react/core";
import useUserBalance from "hooks/useUserBalance";
import useStakeV2 from "hooks/contract/useStakeV2";
import CONTRACT_ADDRESS from "services/addresses/contract";
import { BigNumber } from "ethers";
import useUser from "hooks/useUser";
import Tile from "../common/modal/Tile";
import useInput from "hooks/useInput";
import useStakeModaldata from "hooks/stake/useStakeModalData";
import useStosReward from "hooks/stake/useStosReward";

function StakeGraph() {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const inputValue = useRecoilValue(inputBalanceState);
  const [value, setValue] = useRecoilState(inputState);

  // useEffect(() => {
  //   setValue({ ...inputValue, });
  // }, [sliderValue]);

  // useEffect(() => {
  //   console.log(value.stake_modal_period);
  //   setSliderValue(Number(value.stake_modal_period));
  // }, [value.stake_modal_period]);

  const { colorMode } = useColorMode();
  return (
    <Flex w={"100%"} h="70px" pos="relative">
      <Slider
        aria-label="slider-ex-1"
        defaultValue={0}
        min={0}
        max={156}
        value={sliderValue}
        onChange={(val: any) => setSliderValue(val)}
        h={"10px"}
        alignSelf={"end"}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={0} {...labelStyles}>
          7d
        </SliderMark>
        <SliderMark value={8} {...labelStyles}>
          1m
        </SliderMark>
        <SliderMark value={24} {...labelStyles}>
          6m
        </SliderMark>
        <SliderMark value={52} {...labelStyles}>
          1y
        </SliderMark>
        <SliderMark value={104} {...labelStyles}>
          2y
        </SliderMark>
        <SliderMark value={156} {...labelStyles}>
          3y
        </SliderMark>

        {/* <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark> */}
        {/* <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue} STOS
        </SliderMark> */}
        <SliderTrack bg={colorMode === "light" ? "#e7edf3" : "#353d48"}>
          <SliderFilledTrack bg={"#2775ff"} />
        </SliderTrack>
        <Tooltip
          color={colorMode === "light" ? "#07070c" : "#f1f1f1"}
          placement="top"
          bg={"transparent"}
          w={"50px"}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          textAlign="center"
          fontSize={"15px"}
          fontWeight={600}
          isOpen={showTooltip}
          label={`${sliderValue} sTOS`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  );
}

function BottomContent(props: {
  title: string;
  content: string | { ltos: string; stos: string };
  tooltip?: boolean;
}) {
  const { title, content, tooltip } = props;
  const { colorMode } = useColorMode();

  const ContentComponent = useMemo(() => {
    switch (title) {
      case "You Will Get":
        if (typeof content === "string") {
          return (
            <Text
              color={colorMode === "dark" ? "white.200" : "gray.800"}
              fontWeight={600}
            >
              {content as string}
            </Text>
          );
        }
        return (
          <Flex>
            <Text
              color={colorMode === "dark" ? "white.200" : "gray.800"}
              fontWeight={600}
            >
              {(typeof content !== "string" && content.ltos) || "-"} LTOS
            </Text>
            <Text color={"#64646f"} mx={"5px"}>
              /
            </Text>
            <Text
              color={colorMode === "dark" ? "white.200" : "gray.800"}
              fontWeight={600}
            >
              {(typeof content !== "string" && content.stos) || "-"} sTOS
            </Text>
          </Flex>
        );
      default:
        return (
          <Text
            color={colorMode === "dark" ? "white.200" : "gray.800"}
            fontWeight={600}
          >
            {content as string}
          </Text>
        );
    }
  }, [title, content, colorMode]);

  return (
    <Flex>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        fontSize={14}
        mt={"9px"}
      >
        <Flex>
          <Text
            color={colorMode === "dark" ? "gray.100" : "gray.1000"}
            mr={"6px"}
          >
            {title}
          </Text>
          {tooltip ? (
            <Tooltip label="" placement="bottom">
              <Image src={question} alt={""} height={"16px"} width={"16px"} />
            </Tooltip>
          ) : (
            <></>
          )}
        </Flex>
        {ContentComponent}
      </Flex>
    </Flex>
  );
}

function StakeModal() {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const { closeModal } = useModal();
  const { selectedModalData, selectedModal } = useModal();
  const { bondModalData } = useBondModal();
  const { stakeV2 } = useStakeV2();
  const { inputValue } = useInput("Stake_screen", "stake_modal");
  const { stakeModalInputData } = useStakeModaldata();
  const { StakingV2Proxy_CONTRACT, TOS_CONTRACT } = useCallContract();
  const { StakingV2Proxy } = CONTRACT_ADDRESS;
  const { userTOSBalance } = useUserBalance();
  const { stakeList, tosAllowance } = useUser();
  const [fiveDaysLockup, setFiveDaysLockup] = useState<boolean>(false);
  const [isAllowance, setIsAllowance] = useState<boolean>(false);
  const { maxWeeks } = useStosReward();

  const propData = selectedModalData as BondCardProps;
  const marketId = propData.index;

  console.log(stakeModalInputData);
  console.log(stakeModalInputData?.youWillGet.ltos);

  const contentList = fiveDaysLockup
    ? [
        {
          title: "You Give",
          content: `${inputValue.stake_modal_balance || "0"} TOS`,
          tooltip: false,
        },
        {
          title: "You Will Get",
          content: `${stakeModalInputData?.youWillGet.ltos || "0"} LTOS`,
          tooltip: true,
        },
        {
          title: "Current Balance",
          content: `${stakeModalInputData?.currentBalance || "0"} LTOS`,
          tooltip: true,
        },
        {
          title: "New Balance",
          content: `${stakeModalInputData?.newBalance || "0"} LTOS`,
          tooltip: true,
        },
      ]
    : [
        {
          title: "You Give",
          content: `${inputValue.stake_modal_balance || "0"} TOS`,
          tooltip: false,
        },
        {
          title: "You Will Get",
          content: stakeModalInputData?.youWillGet || "0",
          tooltip: true,
        },
        {
          title: "End Time",
          content: `${stakeModalInputData?.endTime || "-"}`,
          tooltip: true,
        },
      ];

  const callStake = useCallback(() => {
    //Mainnet_maxPeriod = 3years
    //Rinkeby_maxPeriod = 39312
    if (StakingV2Proxy_CONTRACT) {
      if (fiveDaysLockup) {
        return StakingV2Proxy_CONTRACT.stake(
          convertToWei(inputValue.stake_modal_balance)
        );
      }
      return StakingV2Proxy_CONTRACT.stakeGetStos(
        convertToWei(inputValue.stake_modal_balance),
        inputValue.stake_modal_period
      );
    }
  }, [
    inputValue.stake_modal_balance,
    inputValue.stake_modal_period,
    StakingV2Proxy_CONTRACT,
    fiveDaysLockup,
  ]);

  const callApprove = useCallback(async () => {
    if (TOS_CONTRACT) {
      const totalSupply = await TOS_CONTRACT.totalSupply();
      return TOS_CONTRACT.approve(StakingV2Proxy, totalSupply);
    }
  }, [TOS_CONTRACT, StakingV2Proxy]);

  useEffect(() => {
    if (tosAllowance) {
      if (tosAllowance === 0) {
        return setIsAllowance(false);
      }
      if (tosAllowance >= Number(inputValue.stake_modal_balance)) {
        return setIsAllowance(true);
      }
      return setIsAllowance(false);
    }
  }, [tosAllowance, inputValue.stake_modal_balance]);

  return (
    <Modal
      isOpen={selectedModal === "stake_stake_modal"}
      isCentered
      onClose={closeModal}
    >
      <ModalOverlay />
      <ModalContent
        // fontFamily={theme.fonts.roboto}
        bg={colorMode === "light" ? "white.100" : "#121318"}
        minW="43.75em"
        // h="704px"
      >
        <ModalBody px={0} pt={"30px"}>
          <Flex w="100%" flexDir={"column"}>
            {/*TOP Area*/}
            <Flex flexDir={"column"} pos={"relative"}>
              {/* Title Area*/}
              <Flex w={"100%"} justifyContent={"center"} mb={"33px"} h={"28px"}>
                <Text
                  color={colorMode === "light" ? "gray.800" : "white.200"}
                  fontSize={20}
                  fontWeight={600}
                >
                  Stake
                </Text>

                <Flex
                  pos={"absolute"}
                  right={"1.56em"}
                  cursor={"pointer"}
                  onClick={() => closeModal()}
                >
                  <Image src={CLOSE_ICON} alt={"CLOSE_ICON"}></Image>
                </Flex>
              </Flex>
              {/* Content Area*/}
              <Flex w={"100%"} px={"120px"} flexDir={"column"} mb={"29px"}>
                <Flex w={"100%"} justifyContent={"space-between"} mb={"9px"}>
                  <Tile title={"Next Rebase"} content={stakeV2?.nextRebase} />
                  <Tile
                    title={"LTOS Index"}
                    content={stakeV2?.ltosIndex}
                    symbol={"TOS"}
                  />
                </Flex>
                <Flex mb={"9px"}>
                  <BalanceInput
                    w={"100%"}
                    h={45}
                    placeHolder={"Enter an amount of TOS"}
                    pageKey={"Stake_screen"}
                    recoilKey={"stake_modal"}
                    atomKey={"stake_modal_balance"}
                    maxValue={Number(userTOSBalance)}
                  ></BalanceInput>
                </Flex>
                <Flex
                  fontSize={12}
                  color={colorMode === "dark" ? "#8b8b93" : "gray.1000"}
                  h={"17px"}
                  justifyContent={"space-between"}
                  mb={"12px"}
                >
                  <Text>Your Balance</Text>
                  <Text>{userTOSBalance} TOS</Text>
                </Flex>
                <Flex fontSize={12} alignItems="center">
                  <Text
                    mr={"24px"}
                    color={colorMode === "light" ? "gray.800" : "white.200"}
                  >
                    Lock-Up Period
                  </Text>
                  <CustomCheckBox
                    pageKey="Bond_screen"
                    value={""}
                    valueKey={"Bond_Modal"}
                    state={fiveDaysLockup}
                    setState={setFiveDaysLockup}
                  ></CustomCheckBox>
                  <Text ml={"9px"}>5 days Lock-Up</Text>
                  <TextInput
                    w={"170px"}
                    h={"39px"}
                    pageKey={"Stake_screen"}
                    recoilKey={"stake_modal"}
                    atomKey={"stake_modal_period"}
                    placeHolder={"1 Weeks"}
                    style={{ marginLeft: "auto" }}
                    isDisabled={fiveDaysLockup}
                    maxValue={maxWeeks}
                  ></TextInput>
                </Flex>
              </Flex>
              <Flex px={"49px"} mb={"30px"}>
                <StakeGraph></StakeGraph>
              </Flex>
              {/* Content Bottom */}
              <Flex
                flexDir={"column"}
                columnGap={"9px"}
                mb={"30px"}
                px={"50px"}
              >
                {contentList.map((content, index) => {
                  return (
                    <BottomContent
                      title={content.title}
                      content={content.content}
                      key={content.title + index}
                      tooltip={content.tooltip}
                    ></BottomContent>
                  );
                })}
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} mb={"21px"}>
              {isAllowance ? (
                <SubmitButton
                  w={460}
                  h={42}
                  name="Stake"
                  onClick={callStake}
                ></SubmitButton>
              ) : (
                <SubmitButton
                  w={460}
                  h={42}
                  name="Approve"
                  onClick={callApprove}
                ></SubmitButton>
              )}
            </Flex>
            <Flex
              fontSize={11}
              color={"#64646f"}
              textAlign="center"
              w={"100%"}
              mb={"24px"}
            >
              <Text
                w={"100%"}
                color={colorMode === "dark" ? "gray.200" : "gray.700"}
              >
                If this is First time bonding, Please approve Tonstarter to use
                your DAI for bonding.
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default StakeModal;

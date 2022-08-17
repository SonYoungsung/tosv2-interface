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
import { useRecoilValue } from "recoil";
import { selectedModalState } from "atom//global/modal";
import useModal from "hooks/useModal";
import Image from "next/image";
import CLOSE_ICON from "assets/icons/close-modal.svg";
import CustomCheckBox from "common/input/CustomCheckBox";
import SubmitButton from "common/button/SubmitButton";
import { useState } from "react";
import { TextInput, BalanceInput } from "common/input/TextInput";
import TokenSymbol from "common/token/TokenSymol";
import question from "assets/icons/question.svg";
import useCallContract from "hooks/useCallContract";

function StakeGraph() {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Flex w={"100%"} h="70px" pos="relative">
      <Slider
        aria-label="slider-ex-1"
        defaultValue={0}
        min={0}
        max={156}
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
  content: string;
  tooltip?: boolean;
}) {
  const { title, content, tooltip } = props;
  const { colorMode } = useColorMode();

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

        <Text
          color={colorMode === "dark" ? "white.200" : "gray.800"}
          fontWeight={600}
        >
          {content}
        </Text>
      </Flex>
    </Flex>
  );
}

function Tile(props: { title: string; content: string; symbol?: string }) {
  const { title, content, symbol } = props;
  const { colorMode } = useColorMode();
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      w={"152px"}
      alignItems={"center"}
      mb={"15px"}
    >
      <Flex alignItems={"center"}>
        <Text
          color={colorMode === "dark" ? "gray.100" : "gray.1000"}
          h={"17px"}
          mb={"3px"}
          fontWeight={600}
          fontSize={12}
          textAlign="center"
          mr={"6px"}
        >
          {title}
        </Text>
        <Tooltip label="" placement="bottom">
          <Image src={question} alt={""} height={"16px"} width={"16px"} />
        </Tooltip>
      </Flex>

      <Flex fontWeight={"bold"} h={"33px"}>
        <Text
          color={colorMode === "dark" ? "white.100" : "gray.800"}
          fontSize={24}
          mr={2}
        >
          {content}
        </Text>
        <Text
          color={colorMode === "dark" ? "white.200" : "gray.800"}
          fontSize={14}
          pt={"5px"}
          lineHeight={"33px"}
        >
          {symbol ? symbol : ""}
        </Text>
      </Flex>
    </Box>
  );
}

function BondModal() {
  const selectedModal = useRecoilValue(selectedModalState);
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const { closeModal } = useModal();
  const {} = useCallContract();

  const contentList = [
    {
      title: "You Give",
      content: "10 DAI ",
      tooltip: false,
    },
    {
      title: "You Will Get",
      content: "2 LTOS / 33 sTOS",
      tooltip: true,
    },
    {
      title: "End Time",
      content: "2022. 01.12. 23:12 (UTC+9)",
      tooltip: true,
    },
    // {
    //   title: "Rewards (after Lock-up period)",
    //   content: "100 TOS",
    // },
    // {
    //   title: "Earn sTOS",
    //   content: "1,000 sTOS",
    // },
    // {
    //   title: "TOS APY",
    //   content: "30%",
    // },
  ];

  return (
    <Modal
      isOpen={selectedModal === "bond_modal"}
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
                <TokenSymbol
                  tokenType={"ETH"}
                  h={"30px"}
                  w={"30px"}
                ></TokenSymbol>
                <Text
                  color={colorMode === "light" ? "gray.800" : "white.200"}
                  fontSize={20}
                  fontWeight={600}
                >
                  ETH BOND
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
                  <Grid
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(2, 1fr)"
                  >
                    <GridItem>
                      <Tile title={"Bond Price"} content={"$0.95"} />
                    </GridItem>
                    <GridItem>
                      <Tile title={"Market Price"} content={"$0.95"} />
                    </GridItem>
                    <GridItem>
                      <Tile title={"Discount"} content={"95%"} />
                    </GridItem>
                    <GridItem>
                      <Tile
                        title={"Min Bond"}
                        content={"0.001"}
                        symbol={"ETH"}
                      />
                    </GridItem>
                    <GridItem>
                      <Tile title={"Max Bond"} content={"9.5"} symbol={"ETH"} />
                    </GridItem>
                    <GridItem>
                      <Tile
                        title={"LTOS Index"}
                        content={"100"}
                        symbol={"TOS"}
                      />
                    </GridItem>
                  </Grid>
                </Flex>
                <Flex mb={"9px"}>
                  <BalanceInput
                    w={"100%"}
                    h={45}
                    atomKey={"stake_stake_modal_balance"}
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
                  <Text>1,000 WTON</Text>
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
                    valueKey={""}
                  ></CustomCheckBox>
                  <Text ml={"9px"}>5 days Lock-Up</Text>
                  <TextInput
                    w={"120px"}
                    h={"39px"}
                    atomKey={"stake_stake_modal_period"}
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
              <SubmitButton w={460} h={42} name="Approve"></SubmitButton>
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

export default BondModal;

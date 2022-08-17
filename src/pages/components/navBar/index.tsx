import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "./Logo";
import DASHBOARD_ICON from "assets/icons/dashboard.svg";
import BOND_ICON from "assets/icons/bond.svg";
import STAKE_ICON from "assets/icons/stake.svg";
import DASHBOARD_GRAY_ICON from "assets/icons/dashboard-gray.svg";
import BOND_GRAY_ICON from "assets/icons/bond-gray.svg";
import STAKE_GRAY_ICON from "assets/icons/stake-gray.svg";
import BOND_LIGHT_HOVER from "assets/icons/bond-LightHover.svg";
import STAKE_LIGHT_HOVER from "assets/icons/stake-LightHover.svg";
import DASHBOARD_LIGHT_HOVER from "assets/icons/dashboard-LightHover.svg";
import MEDIUM_ICON from "assets/icons/medium.svg";
import TWITTER_ICON from "assets/icons/twitter.svg";
import GITHUB_ICON from "assets/icons/github.svg";
import TELEGRAM_ICON from "assets/icons/telegram.svg";
import ARROW_LEFT_ICON from "assets/icons/arrow-left.svg";
import ARROW_RIGHT_ICON from "assets/icons/arrow-right.svg";
import ARROW_LEFT_LIGHT_ICON from "assets/icons/arrow-leftLight.svg";
import ARROW_RIGHT_LIGHT_ICON from "assets/icons/arrow-rightLight.svg";
import TOOLTIP_ARROW_LEFT_ICON from "assets/icons/Tooltips_left_arrow.svg";
import TOOLTIP_ARROW_LEFT_LIGHT_ICON from 'assets/icons/Tooltips_left_arrow_light.svg';
import Line from "common/line/Line";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import useMediaView from "hooks/useMediaView";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarSelectedState, sidebarState } from "atom//header";

const iconList = [
  {
    icon: MEDIUM_ICON,
  },
  {
    icon: TWITTER_ICON,
  },
  {
    icon: GITHUB_ICON,
  },
  {
    icon: TELEGRAM_ICON,
  },
];

const navItemList = [
  {
    icon: DASHBOARD_GRAY_ICON,
    hoverIcon: DASHBOARD_ICON,
    lightHoverIcon: DASHBOARD_LIGHT_HOVER,
    link: "dashboard",
  },
  {
    icon: BOND_GRAY_ICON,
    hoverIcon: BOND_ICON,
    lightHoverIcon: BOND_LIGHT_HOVER,
    link: "bond",
  },
  {
    icon: STAKE_GRAY_ICON,
    hoverIcon: STAKE_ICON,
    lightHoverIcon: STAKE_LIGHT_HOVER,
    link: "stake",
  },
];

const LinkContainer = (props: { isExpended: boolean }) => {
  return (
    <Flex
      mt={"auto"}
      mb={"15px"}
      flexDir={props.isExpended ? "row" : "column"}
      columnGap={"10px"}
    >
      {iconList.map((item, index) => {
        return (
          <Flex
            w={"36px"}
            h={"36px"}
            alignItems="center"
            justifyContent={"center"}
            borderRadius={10}
            _hover={{ backgroundColor: "blue.100" }}
            key={`link-container-${index}`}
            mb={"10px"}
            cursor={"pointer"}
          >
            <Image src={item.icon} alt={"icon"}></Image>
          </Flex>
        );
      })}
    </Flex>
  );
};

const NavItem = (props: { isExpended: boolean }) => {
  const [isHover, setIsHover] = useState<number | undefined>(undefined);
  const { isExpended } = props;
  const router = useRouter();
  const { pathname } = router;
  const pName = pathname.replaceAll("/", "");
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const { colorMode } = useColorMode();
  return (
    <>
      {navItemList.map((item, index) => {
        const capitalLinkName =
          item.link.charAt(0).toUpperCase() + item.link.slice(1);
        return (
          <Link href={`${item.link}`} key={`nav-item-${index}`} passHref>
            <Flex pos={"relative"}>
              <Flex
                w={isExpended ? 206 : 54}
                h={54}
                alignItems="center"
                justifyContent={isExpended ? "flex-start" : "center"}
                borderRadius={10}
                bg={pName === item.link ? "blue.100" : "transparent"}
                color={
                  isHover === index
                    ? pName === item.link
                      ? "white.200"
                      : "#2775ff"
                    : pName === item.link
                    ? "white.200"
                    : colorMode === "dark"
                    ? "#8b8b93"
                    : "#7e7e8f"
                }
                cursor={"pointer"}
                onMouseEnter={() => setIsHover(index)}
                onMouseLeave={() => setIsHover(undefined)}
                pl={isExpended ? 15 : 0}
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={
                    isHover === index && pName !== item.link? item.lightHoverIcon:    pName === item.link
                      ? item.hoverIcon
                      : item.icon
                  }
                  alt={"icon"}
                ></Image>
                {isExpended && <Text ml={"9px"}>{capitalLinkName}</Text>}
              </Flex>
              {isHover === index && !isExpended && (
                <Flex
                  pos={"absolute"}
                  ml={"90px"}
                  mt={2}
                  px={18}
                  py={"9px"}
                  bg={colorMode === 'dark'? "gray.600": 'white.100'}
                  // bg={'red'}
                  borderRadius={3}
                  alignItems={"center"}
                  justifyContent={"center"}
                  color={"#2775ff"}
                  fontSize={14}
                  border={colorMode === 'dark'?  "1px solid #313442": '1px solid #e8edf2'}
                  zIndex={1000}
                >
                  <Flex pos={"relative"}>
                    <Box
                      pos={"absolute"}
                      left={-7}
                      // bg={"red"}
                      top={-3}
                      style={{ transform: `rotate(270deg)` }}
                    >
                      <Image
                        src={colorMode === 'dark'? TOOLTIP_ARROW_LEFT_ICON: TOOLTIP_ARROW_LEFT_LIGHT_ICON}
                        alt={"TOOLTIP_ARROW_LEFT_ICON"}
                      ></Image>
                    </Box>
                  </Flex>
                  <Text>{capitalLinkName}</Text>
                </Flex>
              )}
            </Flex>
          </Link>
        );
      })}
    </>
  );
};

const MenuButton = (props: { isExpended: boolean }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      pos={"absolute"}
      w={33}
      h={33}
      border={colorMode === "dark" ? "1px solid #313442" : "1px solid #e8edf2"}
      borderRadius={25}
      right={-4}
      boxShadow={"0 4px 6px 0 rgba(0, 0, 0, 0.05)"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={colorMode === "dark" ? "gray.600" : "#ffffff"}
      cursor={"pointer"}
    >
      <Image
        src={
          colorMode === "dark"
            ? props.isExpended
              ? ARROW_LEFT_ICON
              : ARROW_RIGHT_ICON
            : props.isExpended
            ? ARROW_LEFT_LIGHT_ICON
            : ARROW_RIGHT_LIGHT_ICON
        }
        alt={"ARROW_RIGHT_ICON"}
      ></Image>
    </Flex>
  );
};

function MobileSideBar() {
  const sidebarOpenState = useRecoilValue(sidebarSelectedState);
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const isExpended = true;
  const { colorMode } = useColorMode();
  return (
    <Drawer
      isOpen={sidebarOpenState}
      onClose={() => setIsOpen(false)}
      placement={"left"}
    >
      <DrawerOverlay backdropFilter={"blur(17.9px)"} />
      <DrawerContent
        maxW={"256px"}
        w={"256px"}
        minH={"100vh"}
        flexDir="column"
        pt={33}
        alignItems="center"
        bg={colorMode === "light" ? "#ffffff" : "#1f2128"}
      >
        <Box mb={50}>
          <Logo isExpended={isExpended}></Logo>
        </Box>
        <NavItem isExpended={isExpended}></NavItem>
        <Box w={"100%"} mt={18} px={25}>
          <Line></Line>
        </Box>
        <LinkContainer isExpended={isExpended}></LinkContainer>
      </DrawerContent>
    </Drawer>
  );
}

const NavBar = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const { pcView } = useMediaView();
  const { colorMode } = useColorMode();
  if (!pcView) {
    return <MobileSideBar />;
  }

  return (
    <Flex
      minW={isExpended ? 256 : [0, 0, 104]}
      w={0}
      minH={"100vh"}
      flexDir="column"
      pt={33}
      alignItems="center"
      bg={colorMode === "light" ? "#ffffff" : "#1f2128"}
      pos={"relative"}
      borderRight={
        colorMode === "dark" ? "1px solid #313442" : "1px solid #e8edf2"
      }

      // mr={isExpended ? "50%" : "100px"}
    >
      {/* menu button */}
      <Box onClick={() => setIsExpended(!isExpended)}>
        <MenuButton isExpended={isExpended}></MenuButton>
      </Box>
      <Box mb={50}>
        <Logo isExpended={isExpended}></Logo>
      </Box>
      <NavItem isExpended={isExpended}></NavItem>
      <Box w={"100%"} mt={18} px={25}>
        <Line></Line>
      </Box>
      <LinkContainer isExpended={isExpended}></LinkContainer>
    </Flex>
  );
};

export default NavBar;
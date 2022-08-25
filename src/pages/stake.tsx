import { Flex, useTheme, useColorMode } from "@chakra-ui/react";
import TopCardContainer from "pages/components/bond/TopCardContrainer";
import PageLayout from "pages/components/layout/PageLayout";
import StakeCardContainer from "pages/components/stake/StakeCardContainer";
import StakeModal from "pages/components/stake/StakeModal";
import UnstakeModal from "pages/components/stake/UnstakeModal";

const Stake = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  return (
    <Flex
      {...theme.PAGE_LAYOUT_STYLE.layoutTheme(colorMode)}
      bg={colorMode === "light" ? "#fafbfc" : "black.100"}
    >
      <PageLayout></PageLayout>
      <TopCardContainer></TopCardContainer>
      <StakeCardContainer></StakeCardContainer>
      <StakeModal></StakeModal>
      <UnstakeModal></UnstakeModal>
    </Flex>
  );
};

export default Stake;

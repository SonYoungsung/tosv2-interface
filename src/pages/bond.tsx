import { Flex, useTheme,useColorMode } from "@chakra-ui/react";
import BondCardContainer from "pages/components/bond/BondCardContainer";
import BondModal from "pages/components/bond/BondModal";
import UpdateModal from "./components/bond/UpdateModal";
import TopCardContainer from "pages/components/bond/TopCardContrainer";
import GraphContainer from "pages/components/dashboard/GraphContainer";
import SmallCardContainer from "pages/components/dashboard/SmallCardContainer";
import PageLayout from "pages/components/layout/PageLayout";
import { BondTopCardProps } from "types/bond";
import BondTip from 'pages/components/bond/BondTip'
const Bond = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const cardList: BondTopCardProps[] = [
    {
      title: "TOS Price",
      price: "5,000,000,000",
      priceUnit: "$",
    },
    {
      title: "Backing per TOS",
      price: "1.00",
      priceUnit: "$",
    },
  ];

  return (
    <Flex {...theme.PAGE_LAYOUT_STYLE.layoutTheme(colorMode)} bg={colorMode === 'light'? "#fafbfc" : "black.100"}>
      <PageLayout></PageLayout>
      <BondTip/>
      <TopCardContainer cardList={cardList}></TopCardContainer>
      <BondCardContainer></BondCardContainer>
      <BondModal></BondModal>
      <UpdateModal></UpdateModal>
    </Flex>
  );
};

export default Bond;
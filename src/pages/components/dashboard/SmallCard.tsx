import { Flex, Text, useColorMode,Tooltip,IconButton } from "@chakra-ui/react";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { useMemo } from "react";
import { Dashboard_SmallCardType } from "types/dashboard";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const SmallCard: React.FC<Dashboard_SmallCardType> = (props) => {
  const { title, price, priceUnit, priceChangePercent, style, tooltip, tooltipMessage } = props;
  const [width] = useWindowDimensions();
  const isMobile = width < 490;
const {colorMode}  = useColorMode()
  const PriceContent = useMemo(() => {
    switch (priceUnit) {
      case "$":
        return (
          <Text fontSize={22} fontWeight={"bold"}
          color={colorMode === "dark" ? "white.200" : "gray.800"}>
            {priceUnit} {price}
          </Text>
        );
      default:
        return (
          <Flex>
            <Text fontSize={22} fontWeight={"bold"}
              color={colorMode === "dark" ? "white.200" : "gray.800"}>
              {price}
            </Text>
            <Text alignSelf={"end"} ml={"5px"} fontSize={14} pb={"3px"}
              color={colorMode === "dark" ? "white.200" : "gray.800"}>
              {priceUnit}
            </Text>
          </Flex>
        );
    }
  }, [price, priceUnit, colorMode]);

  return (
    <Flex
      h={110}
      borderWidth={isMobile ? "none" : 1}
      borderColor={isMobile ? "" :colorMode === "dark" ? "gray.300":'gray.900'}
      borderRadius={isMobile ? "none" : 14}
      flexDir={"column"}
      pl={"20px"}
      pr={"18px"}
      pt={"15px"}
      pb={"10px"}
      bgColor={colorMode === "dark" ?"gray.600":'white.100'}
      {...style}
    >
      <Flex>
      <Text
        color={"gray.100"}
        fontSize={12}
        fontWeight={600}
        h={17}
        mb={"12px"}
        mr={'6px'}
      >
        {title}
      </Text>
      <Tooltip
          label={tooltipMessage? tooltipMessage:""}
          bg={colorMode === "dark" ? "#1f2128" : "#fff"}
          borderRadius={"3px"}
          color={colorMode==='light'? '#07070c': '#8b8b93'}
          fontSize='12px'
          border={
            colorMode === "light" ? "solid 1px #e8edf2" : "solid 1px #313442"
          }
        >
          <IconButton
            aria-label="Search database"
            h={"16px"}
            minW={"16px"}
            icon={<QuestionOutlineIcon />}
            bg={"transparent"}
            p={0}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
       

       
        </Tooltip>
      </Flex>
      
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex fontSize={22}  color={colorMode === "dark" ? "white.200" : "gray.800"} fontWeight={"bold"}>
          {PriceContent}
        </Flex>
        <Text
          fontSize={18}
          color={priceChangePercent > 0 ? "red.100" : "blue.200"}
        >
          {priceChangePercent > 0 ? "+" : ""}
          {priceChangePercent} %
        </Text>
      </Flex>
      <Flex fontSize={11} alignSelf={"end"} color={colorMode === 'light'? 'gray.700':'gray.200'}>
        than yesterday
      </Flex>
    </Flex>
  );
};

export default SmallCard;

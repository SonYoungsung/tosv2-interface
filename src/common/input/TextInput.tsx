import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  useTheme,
  Text,
} from "@chakra-ui/react";
import { inputBalanceState, inputState } from "atom//global/input";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type InputProp = {
  placeHolder?: string;
  w?: number | string;
  h?: number | string;
  isDisabled?: boolean;
  value?: string | number | any;
  isError?: boolean;
  atomKey: string;
};

const TextInput: React.FC<InputProp> = (props) => {
  const { placeHolder, w, h, isDisabled, atomKey, value, isError } = props;
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Input
      isInvalid={isError}
      w={w || 270}
      h={h || 45}
      ml={"auto"}
      borderRadius={8}
      borderWidth={1}
      borderColor={colorMode === "light" ? "#e8edf2" : "#313442"}
      fontSize={14}
      color={colorMode === "light" ? "gray.800" : "#f1f1f1"}
      _placeholder={{ color: "#64646f" }}
      _hover={{ borderColor: colorMode === "light" ? "#c6cbd9" : "#535353" }}
      focusBorderColor="none"
      _focus={{
        outline: "none",
        color: colorMode === "light" ? "gray.800" : "#f1f1f1",
        boxShadow: "",
        borderColor: colorMode === "light" ? "#9a9aaf" : "#8a8a98",
      }}
      outline="none"
      errorBorderColor={"#e23738"}
      value={value}
    ></Input>
  );
};

function BalanceInput(props: InputProp) {
  const { placeHolder, w, h, isDisabled, atomKey, isError } = props;
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const oldValues = useRecoilValue(inputBalanceState);
  const [value, setValue] = useRecoilState(inputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...oldValues, [atomKey]: event.target.value });
  };

  return (
    <InputGroup>
      <Input
        isInvalid={isError}
        w={w || 270}
        h={h || 45}
        ml={"auto"}
        borderRadius={8}
        borderWidth={1}
        borderColor={colorMode === "light" ? "#e8edf2" : "#313442"}
        fontSize={14}
        color={colorMode === "light" ? "gray.800" : "#f1f1f1"}
        _placeholder={{ color: "#64646f" }}
        _hover={{ borderColor: colorMode === "light" ? "#c6cbd9" : "#535353" }}
        focusBorderColor="none"
        _focus={{
          outline: "none",
          color: colorMode === "light" ? "gray.800" : "#f1f1f1",
          boxShadow: "",
          borderColor: colorMode === "light" ? "#9a9aaf" : "#8a8a98",
        }}
        errorBorderColor={"#e23738"}
        outline="none"
        //@ts-ignore
        value={value.atomKey}
        onChange={onChange}
      ></Input>
      <InputRightElement
        ml={"30px"}
        w={"30px"}
        fontSize={14}
        mr={"12px"}
        cursor={"pointer"}
      >
        <Flex w={"30px"} h={"20px"} color={"#2775ff"}>
          Max
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
}

function InputWithSymbol(props: InputProp) {
  const { placeHolder, w, h, isDisabled, atomKey, isError } = props;
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const oldValues = useRecoilValue(inputBalanceState);
  const [value, setValue] = useRecoilState(inputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...oldValues, [atomKey]: event.target.value });
  };

  return (
    <InputGroup
      w={w || 270}
      alignItems={"center"}
      h={h || 45}
      // ml={'auto'}
      borderRadius={8}
      borderWidth={1}
      borderColor={colorMode === "light" ? "#e8edf2" : "#313442"}
      fontSize={14}
      _focus={{
        outline: "none",
        color: colorMode === "light" ? "gray.800" : "#f1f1f1",
        boxShadow: "",
        borderColor: colorMode === "light" ? "#9a9aaf" : "#8a8a98",
      }}
      _hover={{ borderColor: colorMode === "light" ? "#c6cbd9" : "#535353" }}
    >
      <Flex alignItems={"center"}>
        <Input
          isInvalid={isError}
          focusBorderColor="none"
          color={colorMode === "light" ? "gray.800" : "#f1f1f1"}
          _placeholder={{ color: "#64646f" }}
          errorBorderColor={"#e23738"}
          outline="none"
          w={"-moz-fit-content"}
          border={"none"}
          //@ts-ignore
          value={value.atomKey}
          onChange={onChange}
        ></Input>
        <Text>LTOS</Text>
      </Flex>

      <InputRightElement
        ml={"30px"}
        w={"30px"}
        fontSize={14}
        mr={"12px"}
        cursor={"pointer"}
      >
        <Flex w={"30px"} h={"20px"} color={"#2775ff"}>
          Max
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
}

export { TextInput, BalanceInput, InputWithSymbol };
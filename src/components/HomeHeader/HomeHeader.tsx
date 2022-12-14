import React, { FC } from "react";

import {
  Box,
  Fade,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { Search, SolidCloseCircle } from "../Icons";

export interface HomeHeaderProps {
  children?: React.ReactNode;
  inputValue?: string;
  placeholder?: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const HomeHeader: FC<HomeHeaderProps> = ({
  children = null,
  inputValue = "",
  placeholder = "",
  onSearch,
  onClear,
}) => (
  <>
    {children}
    <Box>
      <Box
        mx="auto"
        position="relative"
        left={0}
        right={0}
        bottom="21px"
        maxWidth={{
          base: "85%",
          sm: "80%",
          md: "40%",
          lg: "600px",
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search
              marginTop="8px"
              marginLeft="14px"
              height="24px"
              width="24px"
              color="gray.500"
            />
          </InputLeftElement>
          <Input
            paddingLeft="44px"
            width="100%"
            size="lg"
            onChange={onSearch}
            placeholder={placeholder}
            value={inputValue}
          />
          <InputRightElement>
            <Fade in={inputValue?.length > 0}>
              <IconButton
                aria-label="close circle"
                position="absolute"
                top="11px"
                right={3}
                maxHeight="22px"
                minWidth="22px"
                backgroundColor="transparent"
                borderRadius={25}
                onClick={onClear}
                color="#a6a6a6"
                fontWeight="bold"
                _hover={{
                  backgroundColor: "transparent",
                  color: "#5c5c5c",
                }}
              >
                <SolidCloseCircle height={5} width={5} padding={0} />
              </IconButton>
            </Fade>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  </>
);

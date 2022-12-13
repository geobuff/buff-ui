import React, { FC } from "react";

import { ChakraProvider, Flex, Link, Text } from "@chakra-ui/react";

import { FooterLink, FooterVariant } from "./Footer.types";

export interface FooterProps {
  variant?: FooterVariant;
  isMobile: boolean;
  isAppMobile: boolean;
  legalStatement?: string;
  columnOneHeading?: string;
  columnOneLinks?: FooterLink[];
  columnTwoHeading?: string;
  columnTwoLinks?: FooterLink[];
  logo: React.ReactNode;
  description: string;
  socialIcons: React.ReactNode;
  extendedBottomRightContent?: React.ReactNode;
}

export const Footer: FC<FooterProps> = ({
  variant = FooterVariant.EXTENDED,
  isMobile,
  isAppMobile,
  legalStatement = "",
  columnOneHeading = "",
  columnOneLinks = [],
  columnTwoHeading = "",
  columnTwoLinks = [],
  logo,
  description,
  socialIcons,
  extendedBottomRightContent,
}) => {
  const simpleFooter = (
    <Flex
      as="footer"
      direction="column"
      justifyContent="center"
      marginTop="auto"
      paddingY={6}
    >
      <Flex alignSelf="center">
        <Text color="gray.500" fontSize={{ base: "11px", md: "14px" }}>
          {legalStatement}
        </Text>
      </Flex>
    </Flex>
  );

  const extendedFooter = (
    <Flex
      as="footer"
      borderTop="2px solid #E3E1E1"
      direction="column"
      justifyContent="space-between"
      marginTop="auto"
      paddingY={3}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        marginY={5}
        paddingX={{ base: 6, md: 10 }}
        width="100%"
      >
        <Flex
          direction="row"
          width="100%"
          justifyContent="space-between"
          paddingX={{ base: "5%", md: 0 }}
        >
          <Flex
            direction="column"
            marginBottom={{ base: 10, md: 0 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text color="#8a8a8a" fontWeight={600} marginBottom={2}>
              {columnOneHeading}
            </Text>
            <Flex direction="column">
              {columnOneLinks.map(({ href, text, isExternal }) => (
                <Link
                  key={href}
                  href={href}
                  color="#B0B0B0"
                  fontSize="14px"
                  fontWeight="medium"
                  marginY={{ base: 1, md: 1 }}
                  isExternal={isExternal}
                >
                  {text}
                </Link>
              ))}
            </Flex>
          </Flex>

          <Flex
            direction="column"
            marginX={{ base: 0, md: 24 }}
            marginBottom={{ base: 10, md: 0 }}
            marginRight={{ base: 0, md: "auto" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text color="#8a8a8a" fontWeight={600} marginBottom={2}>
              {columnTwoHeading}
            </Text>
            <Flex direction="column">
              {columnTwoLinks.map(({ href, text, isExternal }) => (
                <Link
                  key={href}
                  href={href}
                  color="#B0B0B0"
                  fontSize="14px"
                  fontWeight="medium"
                  marginY={{ base: 1, md: 1 }}
                  isExternal={isExternal}
                >
                  {text}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          marginLeft={{ base: 0, md: "auto" }}
          justifyContent="flex-end"
        >
          <Flex
            direction="column"
            marginBottom={{ base: 5, md: 0 }}
            justifyContent="center"
          >
            <Flex
              width="100%"
              justifyContent={{ base: "center", md: "flex-end" }}
            >
              {logo}
            </Flex>
            <Flex justifyContent={{ base: "center", md: "center" }}>
              <Text
                marginTop={4}
                marginLeft={1}
                color="#8a8a8a"
                maxWidth={"400px"}
                textAlign={{ base: "center", md: "right" }}
              >
                {description}
              </Text>
            </Flex>
            {isMobile && socialIcons}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        borderTop="2px solid #E3E1E1"
        paddingTop={{ base: 3, md: 5 }}
        paddingBottom={{ base: isAppMobile ? 6 : 2, md: 3 }}
        paddingX={{ base: 2, md: 10 }}
      >
        <Text color="#B0B0B0" fontSize="14px" marginBottom={{ base: 2, md: 0 }}>
          {legalStatement}
        </Text>
        {!isMobile && socialIcons}
        <Flex color="#B0B0B0">{extendedBottomRightContent}</Flex>
      </Flex>
    </Flex>
  );

  return (
    <ChakraProvider>
      {variant === FooterVariant.SIMPLE ? simpleFooter : extendedFooter}
    </ChakraProvider>
  );
};

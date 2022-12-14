import React, { FC } from "react";

import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { ArrowLeft } from "../../Icons";

export interface ForgotPasswordContentProps {
  children?: React.ReactNode;
  backToLoginText?: string;
  heading?: string;
  explainer?: string;
  logo: React.ReactNode;
  onBackToLoginClick?: () => void;
}

export const ForgotPasswordContent: FC<ForgotPasswordContentProps> = ({
  children = null,
  backToLoginText = "",
  heading = "",
  explainer = "",
  logo = null,
  onBackToLoginClick,
}) => (
  <>
    <Flex mt={-2} ml={-4} mb={6}>
      <Button
        alignItems="center"
        backgroundColor="transparent"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={onBackToLoginClick}
      >
        <ArrowLeft height={5} width={5} marginRight={1} />
        <Text fontWeight="bold" fontSize="14px">
          {backToLoginText}
        </Text>
      </Button>
    </Flex>
    <Flex
      justifyContent="center"
      marginTop={3}
      marginBottom={5}
      _hover={{ cursor: "pointer" }}
    >
      <Link href="/">{logo}</Link>
    </Flex>

    <Heading as="h1" fontSize="26px" marginY={3} fontWeight="800">
      {heading}
    </Heading>

    <Text marginTop={2} color="gray.600" fontSize="14px">
      {explainer}
    </Text>
    {children}
  </>
);

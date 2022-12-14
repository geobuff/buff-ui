import React, { FC } from "react";

import { Button, Flex, Link, ScaleFade, Text } from "@chakra-ui/react";

import { SolidSubtractCircle } from "../../Icons";

export interface ResetPasswordErrorProps {
  error?: string;
  action?: string;
  href?: string;
}

export const ResetPasswordError: FC<ResetPasswordErrorProps> = ({
  error = "",
  action = "",
  href = "",
}) => (
  <Flex marginBottom={4} alignItems="center" direction="column">
    <ScaleFade initialScale={0.75} in>
      <SolidSubtractCircle
        marginBottom={2}
        height="60px"
        width="56px"
        color="red.500"
      />
    </ScaleFade>
    <Text
      textAlign="center"
      fontSize="14px"
      fontWeight="bold"
      marginBottom={4}
      maxWidth={{ base: "250px", md: "100%" }}
    >
      {error}
    </Text>

    <Link href={href}>
      <Button size="sm" variant="outline" color="gray.600">
        {action}
      </Button>
    </Link>
  </Flex>
);

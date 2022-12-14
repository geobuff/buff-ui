import React, { FC } from "react";

import { Box, Fade, Flex, Link, ScaleFade, Text } from "@chakra-ui/react";

import { SolidSuccessCircle } from "../../Icons";

export interface ResetPasswordSuccessProps {
  heading?: string;
  descriptionOne?: string;
  action?: string;
  descriptionTwo?: string;
  href?: string;
}

export const ResetPasswordSuccess: FC<ResetPasswordSuccessProps> = ({
  heading = "",
  descriptionOne = "",
  action = "",
  descriptionTwo = "",
  href = "",
}) => (
  <Box marginY={2}>
    <Fade in>
      <Flex marginBottom={4} alignItems="center" direction="column">
        <ScaleFade initialScale={0.75} in>
          <SolidSuccessCircle
            marginBottom={2}
            height="60px"
            width="56px"
            color="green.500"
          />
        </ScaleFade>
        <Text textAlign="center" fontWeight="bold" marginBottom={1}>
          {heading}
        </Text>

        <Text color="gray.600" textAlign="center" fontSize="14px">
          {descriptionOne}
          <Link
            href={href}
            fontWeight={600}
            _hover={{ textDecoration: "underline" }}
          >
            {action?.toLowerCase()}
          </Link>
          {descriptionTwo}
        </Text>
      </Flex>
    </Fade>
  </Box>
);

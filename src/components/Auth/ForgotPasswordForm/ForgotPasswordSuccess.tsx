import React, { FC } from "react";

import { Box, Fade, Flex, Link, ScaleFade, Text } from "@chakra-ui/react";

import { SolidSuccessCircle } from "../../Icons";

export interface ForgotPasswordSuccessProps {
  message?: string;
  logo?: React.ReactNode;
}

export const ForgotPasswordSuccess: FC<ForgotPasswordSuccessProps> = ({
  message = "",
  logo = null,
}) => (
  <>
    <Flex
      justifyContent="center"
      marginTop={3}
      marginBottom={5}
      _hover={{ cursor: "pointer" }}
    >
      <Link href="/">{logo}</Link>
    </Flex>
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
          <Text
            textAlign="center"
            fontWeight="500"
            fontSize="14px"
            maxWidth={{ base: "250px", md: "100%" }}
          >
            {message}
          </Text>
        </Flex>
      </Fade>
    </Box>
  </>
);

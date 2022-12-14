import React, { FC } from "react";

import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import { ErrorAlertBanner } from "../../ErrorAlertBanner";
import { GeoBuffLogo } from "../../Icons";
import { AuthCard } from "../AuthCard";
import { AuthView } from "../AuthView";
import { RegisterLink } from "./RegisterLink";

export interface LoginFormProps {
  chikdren?: React.ReactNode;
  shouldRenderOnMobile: boolean;
  error?: string;
  logo?: React.ReactNode;
  heading?: string;
  linkMessage?: string;
  linkAction?: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  children = null,
  shouldRenderOnMobile = false,
  error = "",
  logo = <GeoBuffLogo height={42} width={200} />,
  heading = "",
  linkMessage = "",
  linkAction = "",
}) => {
  const content = (
    <>
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
      {children}
    </>
  );

  return (
    <>
      <ErrorAlertBanner error={error} />
      {shouldRenderOnMobile ? (
        <>
          <Box position="absolute" top={0} right={0}>
            <RegisterLink message={linkMessage} action={linkAction} />
          </Box>
          <AuthView marginTop={{ base: 6, md: 16 }}>
            <AuthCard marginX="auto" marginTop={5} marginBottom={3} width={375}>
              {content}
            </AuthCard>
          </AuthView>
        </>
      ) : (
        <Flex direction="column" padding={5}>
          {content}
          <RegisterLink message={linkMessage} action={linkAction} />
        </Flex>
      )}
    </>
  );
};

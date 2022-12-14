import React, { FC } from "react";

import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import { GeoBuffLogo } from "../../Icons";
import { AuthCard } from "../AuthCard";
import { AuthView } from "../AuthView";
import { RegisterLink } from "./RegisterLink";

export interface LoginFormProps {
  chikdren?: React.ReactNode;
  shouldRenderOnMobile: boolean;
  logo?: React.ReactNode;
  heading?: string;
  linkMessage?: string;
  linkAction?: string;
  linkHref?: string;
}

export const LoginForm: FC<LoginFormProps> = ({
  children = null,
  shouldRenderOnMobile = false,
  logo = <GeoBuffLogo height={42} width={200} />,
  heading = "",
  linkMessage = "",
  linkAction = "",
  linkHref = "",
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

  const link = (
    <RegisterLink message={linkMessage} action={linkAction} href={linkHref} />
  );

  return shouldRenderOnMobile ? (
    <>
      <Box position="absolute" top={0} right={0}>
        {link}
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
      {link}
    </Flex>
  );
};

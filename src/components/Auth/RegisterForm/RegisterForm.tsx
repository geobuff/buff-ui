import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

import { AuthCard } from "../AuthCard";
import { AuthView } from "../AuthView";
import { LoginLink } from "./LoginLink";

export interface RegisterFormProps {
  children?: React.ReactNode;
  isMobile: boolean;
  isFirstStep?: boolean;
  linkMessage?: string;
  linkAction?: string;
  linkHref?: string;
}

export const RegisterForm: FC<RegisterFormProps> = ({
  children = null,
  isMobile,
  isFirstStep = true,
  linkMessage = "",
  linkAction = "",
  linkHref = "",
}) => (
  <>
    {!isMobile && (
      <Box position="absolute" top={0} right={0}>
        <LoginLink message={linkMessage} action={linkAction} href={linkHref} />
      </Box>
    )}

    <AuthView marginTop={{ base: 0, md: 16 }}>
      <AuthCard
        marginX="auto"
        marginY={4}
        maxWidth={{ base: "100%", md: 420 }}
        width="100%"
        zIndex={2}
      >
        <Box height="100%">{children}</Box>
        {isMobile && isFirstStep && <LoginLink />}
      </AuthCard>
    </AuthView>
  </>
);

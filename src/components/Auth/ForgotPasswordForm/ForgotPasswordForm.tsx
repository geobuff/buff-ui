import React, { FC } from "react";

import { Flex } from "@chakra-ui/react";

import { GeoBuffLogo } from "../../Icons";
import { AuthCard } from "../AuthCard";
import { AuthView } from "../AuthView";
import { ForgotPasswordContent } from "./ForgotPasswordContent";
import { ForgotPasswordSuccess } from "./ForgotPasswordSuccess";

export interface ForgotPasswordFormProps {
  children?: React.ReactNode;
  shouldRenderOnMobile: boolean;
  isSuccess: boolean;
  successMessage?: string;
  backToLoginText: string;
  heading: string;
  explainer: string;
  logo?: React.ReactNode;
  onBackToLoginClick: () => void;
}

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  children,
  shouldRenderOnMobile,
  isSuccess,
  successMessage = "",
  backToLoginText = "",
  heading = "",
  explainer = "",
  logo = <GeoBuffLogo height="42px" width="200px" />,
  onBackToLoginClick,
}) => {
  const content = isSuccess ? (
    <ForgotPasswordSuccess message={successMessage} logo={logo} />
  ) : (
    <ForgotPasswordContent
      backToLoginText={backToLoginText}
      heading={heading}
      explainer={explainer}
      logo={logo}
      onBackToLoginClick={onBackToLoginClick}
    >
      {children}
    </ForgotPasswordContent>
  );

  return (
    <>
      {shouldRenderOnMobile ? (
        <>
          <AuthView>
            <AuthCard
              height={isSuccess ? 260 : 478}
              width={375}
              marginX="auto"
              marginY={5}
            >
              {content}
            </AuthCard>
          </AuthView>
        </>
      ) : (
        <Flex direction="column" padding={5}>
          {content}
        </Flex>
      )}
    </>
  );
};

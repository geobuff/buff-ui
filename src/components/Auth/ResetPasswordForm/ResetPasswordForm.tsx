import React, { FC } from "react";

import { Flex, Link } from "@chakra-ui/react";

import { GeoBuffLogo } from "../../Icons";
import { AuthCard } from "../AuthCard";
import { AuthView } from "../AuthView";
import { ResetPasswordContent } from "./ResetPasswordContent";
import { ResetPasswordError } from "./ResetPasswordError";
import { ResetPasswordSuccess } from "./ResetPasswordSuccess";

export interface ResetPasswordFormProps {
  children?: React.ReactNode;
  shouldRenderOnMobile?: boolean;
  error?: string;
  isSuccess?: boolean;
  heading?: string;
  explainer?: string;
  successHeading?: string;
  descriptionOne?: string;
  action?: string;
  descriptionTwo?: string;
  href?: string;
  logo?: React.ReactNode;
}

export const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  children = null,
  shouldRenderOnMobile,
  error = "",
  isSuccess,
  heading = "",
  explainer = "",
  successHeading = "",
  descriptionOne = "",
  action = "",
  descriptionTwo = "",
  href = "",
  logo = <GeoBuffLogo height={42} width={200} />,
}) => {
  const getContent = (): React.ReactNode => {
    if (error) {
      return <ResetPasswordError error={error} action={action} href={href} />;
    }

    if (isSuccess) {
      return (
        <ResetPasswordSuccess
          heading={successHeading}
          descriptionOne={descriptionOne}
          action={action}
          descriptionTwo={descriptionTwo}
          href={href}
        />
      );
    }

    return (
      <ResetPasswordContent heading={heading} explainer={explainer}>
        {children}
      </ResetPasswordContent>
    );
  };

  return (
    <>
      {shouldRenderOnMobile ? (
        <AuthView>
          <AuthCard
            marginX="auto"
            marginY={5}
            height={isSuccess || error ? 280 : 422}
          >
            <Flex
              justifyContent="center"
              marginTop={3}
              marginBottom={5}
              _hover={{ cursor: "pointer" }}
            >
              <Link href="/">{logo}</Link>
            </Flex>

            {getContent()}
          </AuthCard>
        </AuthView>
      ) : (
        <Flex direction="column" padding={5} marginBottom={4}>
          <Link href="/">{logo}</Link>
          {getContent()}
        </Flex>
      )}
    </>
  );
};

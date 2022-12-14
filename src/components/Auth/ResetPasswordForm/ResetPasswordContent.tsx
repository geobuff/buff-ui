import React, { FC } from "react";

import { Text } from "@chakra-ui/react";

export interface ResetPasswordContentProps {
  children?: React.ReactNode;
  heading?: string;
  explainer?: string;
}

export const ResetPasswordContent: FC<ResetPasswordContentProps> = ({
  children = null,
  heading = "",
  explainer = "",
}) => (
  <>
    <Text fontSize="26px" marginY={2} fontWeight="800">
      {heading}
    </Text>

    <Text marginTop={2} color="gray.600" fontSize="14px">
      {explainer}
    </Text>
    {children}
  </>
);

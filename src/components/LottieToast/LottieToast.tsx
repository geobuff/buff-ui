import React, { FC } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, IconButton, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";

export interface LottieToastProps extends FlexProps {
  animationData: any;
  message?: string;
  ariaLabel?: string;
  color?: "yellow" | "blue";
  onClose: () => void;
}

export const LottieToast: FC<LottieToastProps> = ({
  animationData,
  message = "",
  ariaLabel = "",
  color = "yellow",
  onClose = () => {},
  ...props
}) => (
  <Flex
    background={color === "blue" ? "blue.500" : "yellow.100"}
    color={color === "blue" ? "white" : "yellow.700"}
    fontWeight="medium"
    borderRadius="6px"
    padding={1}
    {...props}
  >
    <Flex padding={2}>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: "24px", height: "24px" }}
      />
      <Text marginLeft={2}>{message}</Text>
    </Flex>
    <IconButton
      marginLeft={-1}
      onClick={onClose}
      variant="ghost"
      height="24px"
      minWidth="24px"
      borderRadius="4px"
      _hover={{ backgroundColor: "yellow.200" }}
      padding={0}
      icon={<CloseIcon height="9px" width="9px" />}
      aria-label={ariaLabel}
    />
  </Flex>
);

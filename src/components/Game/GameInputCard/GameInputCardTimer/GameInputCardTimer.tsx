import React, { FC } from "react";

import { Box, BoxProps, Text } from "@chakra-ui/react";

import { ExpiryTimestamp } from "../../Game.types";
import { secondsToMinutesString, toMinTwoDigits } from "../../Game.utils";

export interface TimerContainerProps extends BoxProps {
  shouldShowTitle: boolean;
  timeRemainingText?: string;
}

const TimerContainer: FC<TimerContainerProps> = ({
  children = null,
  shouldShowTitle = true,
  timeRemainingText = "",
  ...props
}) => (
  <Box {...props}>
    {shouldShowTitle && <Text fontWeight="bold">{timeRemainingText}</Text>}
    <Text fontWeight={800} fontSize={props?.fontSize || "36px"}>
      {children}
    </Text>
  </Box>
);

export interface GameInputCardTimerProps extends BoxProps {
  totalSeconds?: number;
  expiryTimestamp?: ExpiryTimestamp;
  hasGameStarted: boolean;
  hasGameStopped: boolean;
  shouldShowTitle?: boolean;
}

export const GameInputCardTimer: FC<GameInputCardTimerProps> = ({
  totalSeconds = 900,
  expiryTimestamp = { minutes: 0, seconds: 0 },
  hasGameStarted = false,
  hasGameStopped = false,
  shouldShowTitle = true,
  ...props
}) => {
  if (hasGameStopped) {
    return (
      <TimerContainer shouldShowTitle={shouldShowTitle} {...props}>
        {`${toMinTwoDigits(expiryTimestamp.minutes)}:${toMinTwoDigits(
          expiryTimestamp.seconds
        )}`}
      </TimerContainer>
    );
  }

  if (!hasGameStarted) {
    return (
      <TimerContainer shouldShowTitle={shouldShowTitle} {...props}>
        {secondsToMinutesString(totalSeconds)}
      </TimerContainer>
    );
  }

  return (
    <TimerContainer shouldShowTitle={shouldShowTitle} {...props}>
      {`${toMinTwoDigits(expiryTimestamp.minutes)}:${toMinTwoDigits(
        expiryTimestamp.seconds
      )}`}
    </TimerContainer>
  );
};

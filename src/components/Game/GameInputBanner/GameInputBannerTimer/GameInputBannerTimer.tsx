import React, { FC } from "react";

import { BoxProps, Text, TextProps } from "@chakra-ui/react";

import { ExpiryTimestamp } from "../../Game.types";
import { secondsToMinutesString, toMinTwoDigits } from "../../Game.utils";

const TimerContainer: FC<TextProps> = ({ children, ...props }) => (
  <Text
    lineHeight={1.15}
    color="white"
    fontSize="32px"
    fontWeight={700}
    {...props}
  >
    {children}
  </Text>
);

export interface GameInputBannerTimerProps extends BoxProps {
  totalSeconds?: number;
  expiryTimestamp?: ExpiryTimestamp;
  hasGameStarted?: boolean;
  hasGameStopped?: boolean;
}

export const GameInputBannerTimer: FC<GameInputBannerTimerProps> = ({
  totalSeconds = 900,
  expiryTimestamp = { minutes: 0, seconds: 0 },
  hasGameStarted = false,
  hasGameStopped = false,
  ...props
}) => {
  if (hasGameStopped) {
    return (
      <TimerContainer {...props}>
        {`${toMinTwoDigits(expiryTimestamp.minutes)}:${toMinTwoDigits(
          expiryTimestamp.seconds
        )}`}
      </TimerContainer>
    );
  }

  if (!hasGameStarted) {
    return (
      <TimerContainer>{secondsToMinutesString(totalSeconds)}</TimerContainer>
    );
  }

  return (
    <TimerContainer>
      {`${toMinTwoDigits(expiryTimestamp.minutes)}:${toMinTwoDigits(
        expiryTimestamp.seconds
      )}`}
    </TimerContainer>
  );
};

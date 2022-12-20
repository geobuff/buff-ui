import React, { FC } from "react";

import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";

import { formatNumber, secondsToMinutesString } from "../../Game.utils";

export interface GameOverModalExistingEntryProps {
  rank?: number;
  score?: number;
  time?: number;
  username?: string;
  isLoading?: boolean;
  rankText?: string;
  scoreText?: string;
  timeText?: string;
  usernameText?: string;
}

export const GameOverModalExistingEntry: FC<
  GameOverModalExistingEntryProps
> = ({
  rank = 0,
  score = 0,
  time = 900,
  username = "",
  isLoading = true,
  rankText = "",
  scoreText = "",
  timeText = "",
  usernameText = "",
}) => (
  <Flex
    borderRadius={12}
    backgroundColor="#F0F0F0"
    justifyContent="space-between"
    paddingY={3}
    paddingX={4}
  >
    <Box>
      <Text color="#768389" fontSize="10px" fontWeight="bold">
        {rankText}
      </Text>
      {isLoading ? (
        <Skeleton height="20px" width="100%" />
      ) : (
        <Text fontSize="14px" fontWeight="bold">
          {formatNumber(rank)}
        </Text>
      )}
    </Box>
    <Box>
      <Text color="#768389" fontSize="10px" fontWeight="bold">
        {usernameText}
      </Text>
      {isLoading ? (
        <Skeleton height="20px" width="100%" />
      ) : (
        <Text
          fontSize="14px"
          fontWeight="bold"
          maxWidth="150px"
          marginRight={1}
          noOfLines={1}
        >
          {username}
        </Text>
      )}
    </Box>
    <Box>
      <Text color="#768389" fontSize="10px" fontWeight="bold">
        {timeText}
      </Text>
      {isLoading ? (
        <Skeleton height="20px" width="100%" />
      ) : (
        <Text fontSize="14px" fontWeight="bold">
          {secondsToMinutesString(time)}
        </Text>
      )}
    </Box>
    <Box>
      <Text color="#768389" fontSize="10px" fontWeight="bold">
        {scoreText}
      </Text>
      {isLoading ? (
        <Skeleton height="20px" width="100%" />
      ) : (
        <Text fontSize="14px" fontWeight="bold">
          {score}
        </Text>
      )}
    </Box>
  </Flex>
);

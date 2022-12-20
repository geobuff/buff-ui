import React, { FC } from "react";

import { Flex, Text } from "@chakra-ui/react";

export interface GameInputCardScoreProps {
  score?: number;
  maxScore?: number;
}

export const GameInputCardScore: FC<GameInputCardScoreProps> = ({
  score = 0,
  maxScore = 0,
}) => (
  <Flex alignItems="flex-end">
    <Text fontSize="56px" fontWeight={800} lineHeight="40px" mr={1} my={2}>
      {score}
    </Text>
    <Text color="#768389" fontSize="24px" fontWeight="bold">
      {`/ ${maxScore}`}
    </Text>
  </Flex>
);

import React, { FC } from "react";

import { Box, Divider, Flex } from "@chakra-ui/react";

import { GameHeader } from "../GameHeader";

export interface GameSidebarProps {
  children?: React.ReactNode;
  heading?: string;
  quizId?: number;
  hasLeaderboard?: boolean;
}

export const GameSidebar: FC<GameSidebarProps> = ({
  children = null,
  heading = "",
  quizId = 0,
  hasLeaderboard = false,
}) => (
  <Box
    position="absolute"
    top={0}
    bottom={0}
    left={0}
    width="375px"
    backgroundColor="#FFF"
    boxShadow="6px 4px 4px rgba(0,0,0,0.08)"
    overflowY="scroll"
    minHeight="100%"
  >
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      padding={4}
      paddingBottom="100px"
      minHeight="1000px"
    >
      {heading && (
        <>
          <Flex mt={14} justifyContent="center">
            <GameHeader
              hasLeaderboard={hasLeaderboard}
              heading={heading}
              quizId={quizId}
            />
          </Flex>
          <Divider my={5} borderColor="#E3E1E1" borderWidth={1} />
        </>
      )}
      {children}
    </Box>
  </Box>
);

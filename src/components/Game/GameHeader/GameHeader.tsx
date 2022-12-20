import React, { FC } from "react";

import { BoxProps, Flex, Heading, Link } from "@chakra-ui/react";

import { Twemoji } from "../../Twemoji";

export interface GameHeaderProps extends BoxProps {
  hasLeaderboard?: boolean;
  quizId?: number;
  heading: string;
  shouldTruncateText?: boolean;
  href?: string;
}

export const GameHeader: FC<GameHeaderProps> = ({
  hasLeaderboard = false,
  quizId,
  heading,
  shouldTruncateText = false,
  href = "",
  ...props
}) => (
  <Flex
    width="100%"
    justifyContent="center"
    maxWidth={{ base: "100%", md: "270px" }}
    {...props}
  >
    {hasLeaderboard && quizId && (
      <Link href={href}>
        <Twemoji emoji="🏆" height="22px" width="22px" pt={1} mr={2} />
      </Link>
    )}
    <Flex direction="column" justifyContent="center">
      <Heading as="h1" size="md" noOfLines={shouldTruncateText && 1}>
        {heading}
      </Heading>
    </Flex>
  </Flex>
);

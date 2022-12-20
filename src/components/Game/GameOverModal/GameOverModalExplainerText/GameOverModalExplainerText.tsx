import React, { FC } from "react";

import { Box, Button, Text, TextProps } from "@chakra-ui/react";

import { LeaderboardEntry } from "../../Game.types";
import { GameOverModalExistingEntry } from "../GameOverModalExistingEntry";

const ExplainerText: FC<TextProps> = ({ children = null, ...props }) => (
  <Text
    color="#828282"
    fontSize="14px"
    fontWeight="medium"
    textAlign="center"
    {...props}
  >
    {children}
  </Text>
);

export interface GameOverModalExplainerTextProps {
  existingEntry?: LeaderboardEntry;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  explainerTextOne?: string;
  explainerActionOne?: string;
  explainerTextTwo?: string;
  explainerActionTwo?: string;
  submitAScoreText?: string;
  submitALeaderboardEntryText?: string;
  scoreQuizLoggedInExplainer?: string;
  noExistingEntryExplainer?: string;
  existingEntryText?: string;
  existingEntryExplainer?: string;
  rankText?: string;
  scoreText?: string;
  timeText?: string;
  usernameText?: string;
  onSubmit?: (existingEntry: LeaderboardEntry) => void;
  onRedirectWithScore?: (path: string) => void;
}

export const GameOverModalExplainerText: FC<
  GameOverModalExplainerTextProps
> = ({
  existingEntry = null,
  isLoggedIn = false,
  isLoading = true,
  explainerTextOne = "",
  explainerActionOne = "",
  explainerTextTwo = "",
  explainerActionTwo = "",
  submitAScoreText = "",
  submitALeaderboardEntryText = "",
  scoreQuizLoggedInExplainer = "",
  noExistingEntryExplainer = "",
  existingEntryText = "",
  existingEntryExplainer = "",
  rankText = "",
  scoreText = "",
  timeText = "",
  usernameText = "",
  onSubmit = (existingEntry: LeaderboardEntry): void => {},
  onRedirectWithScore = (path: string): void => {},
}) => {
  const scoreQuizNotLoggedIn = !onSubmit && !isLoggedIn;
  const scoreQuizLoggedIn = !onSubmit && isLoggedIn;
  const leaderboardQuizNotLoggedIn = onSubmit && !isLoggedIn;

  if (scoreQuizNotLoggedIn) {
    return (
      <ExplainerText>
        {explainerTextOne}
        <Button
          variant="link"
          onClick={(): void => onRedirectWithScore("/login")}
          fontSize="14px"
          minWidth="0"
        >
          {explainerActionOne}
        </Button>
        {explainerTextTwo}
        <Button
          variant="link"
          onClick={(): void => onRedirectWithScore("/register")}
          fontSize="14px"
          minWidth="0"
        >
          {explainerActionTwo}
        </Button>{" "}
        {submitAScoreText}
      </ExplainerText>
    );
  }

  if (leaderboardQuizNotLoggedIn) {
    return (
      <ExplainerText>
        {explainerTextOne}
        <Button
          variant="link"
          onClick={(): void => onRedirectWithScore("/login")}
          fontSize="14px"
          minWidth="0"
        >
          {explainerActionOne}
        </Button>
        {explainerTextTwo}
        <Button
          variant="link"
          onClick={(): void => onRedirectWithScore("/register")}
          fontSize="14px"
          minWidth="0"
        >
          {explainerActionTwo}
        </Button>{" "}
        {submitALeaderboardEntryText}
      </ExplainerText>
    );
  }

  if (scoreQuizLoggedIn) {
    return <ExplainerText>{scoreQuizLoggedInExplainer}</ExplainerText>;
  }

  if (!isLoading && !existingEntry) {
    return <ExplainerText>{noExistingEntryExplainer}</ExplainerText>;
  }

  return (
    <Box>
      <ExplainerText textAlign="left" fontWeight="bold" color="black">
        {existingEntryText}
      </ExplainerText>
      <Box marginY={3}>
        <GameOverModalExistingEntry
          isLoading={isLoading}
          {...existingEntry}
          rankText={rankText}
          usernameText={usernameText}
          timeText={timeText}
          scoreText={scoreText}
        />
      </Box>
      <ExplainerText marginTop={2}>{existingEntryExplainer}</ExplainerText>
    </Box>
  );
};

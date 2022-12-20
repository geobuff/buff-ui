import React, { FC } from "react";

import { Box, Button, Text, TextProps } from "@chakra-ui/react";

import { LeaderboardEntry, QuizScoreType } from "../../Game.types";
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
  quizScoreType?: QuizScoreType;
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
  onRedirectWithScore?: (path: string) => void;
}

export const GameOverModalExplainerText: FC<
  GameOverModalExplainerTextProps
> = ({
  quizScoreType = "score",
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
  onRedirectWithScore = (path: string): void => {},
}) => {
  if (quizScoreType === "score") {
    if (!isLoggedIn) {
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
    } else {
      return <ExplainerText>{scoreQuizLoggedInExplainer}</ExplainerText>;
    }
  }

  if (!isLoggedIn) {
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
          {...existingEntry}
          isLoading={isLoading}
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

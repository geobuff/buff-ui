import React, { FC } from "react";

import { Box, Button, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";

import { ArrowLeft, SolidQuestionMarkCircle } from "../../Icons";
import { Modal } from "../../Modal";
import { LeaderboardEntry, QuizScoreType } from "../Game.types";
import { secondsToMinutesString } from "../Game.utils";
import { GameOverModalExplainerText } from "./GameOverModalExplainerText";

const divider = <Divider borderColor="#E3E1E1" borderWidth={1} my={6} />;

export interface GameOverModalProps {
  quizScoreType?: QuizScoreType;
  quizName?: string;
  maxScore?: number;
  score?: number;
  time?: number;
  existingEntry?: LeaderboardEntry;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  isOpen?: boolean;
  isSubmitting?: boolean;
  isNotchedIphone?: boolean;
  submitText?: string;
  gameOverText?: string;
  backToMapText?: string;
  backToMapExplainer?: string;
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
  usernameText?: string;
  scoreText?: string;
  timeText?: string;
  onClose?: () => void;
  onSubmit?: (existingEntry: LeaderboardEntry) => void;
  onRedirectWithScore?: (path: string) => void;
}

export const GameOverModal: FC<GameOverModalProps> = ({
  quizScoreType = "score",
  quizName = "",
  maxScore = 0,
  score = 0,
  time = 100,
  isLoggedIn = true,
  isLoading = true,
  existingEntry = null,
  isOpen = false,
  isSubmitting = false,
  isNotchedIphone = false,
  submitText = "",
  gameOverText = "",
  backToMapText = "",
  backToMapExplainer = "",
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
  onClose = (): void => {},
  onSubmit = (existingEntry: LeaderboardEntry): void => {},
  onRedirectWithScore = (path: string): void => {},
}) => {
  const footer = onSubmit ? (
    <Button
      colorScheme="green"
      onClick={(): void => onSubmit(existingEntry)}
      isDisabled={!isLoggedIn || isSubmitting || isLoading}
      marginBottom={isNotchedIphone ? 4 : 0}
    >
      {submitText}
    </Button>
  ) : (
    <Box height="30px" />
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} footer={footer}>
      <Button
        alignItems="center"
        backgroundColor="transparent"
        marginTop={2}
        marginLeft={2}
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <ArrowLeft height={5} width={5} marginRight={1} />
        <Text fontWeight="bold" fontSize="14px">
          {backToMapText}
        </Text>
        <Tooltip padding={2} label={backToMapExplainer}>
          <Text>
            <SolidQuestionMarkCircle
              height={3}
              width={3}
              marginLeft={1}
              marginBottom="2px"
              color="gray.600"
            />
          </Text>
        </Tooltip>
      </Button>

      <Box padding={{ base: 4, md: 8 }}>
        <Box textAlign="center">
          <Text fontSize="46px" fontWeight="black">
            {gameOverText}
          </Text>

          <Text color="#828282" fontSize="22px" fontWeight="bold">
            {quizName}
          </Text>
        </Box>

        {divider}

        <Flex marginY={4} marginX={2} justifyContent="space-between">
          <Box>
            <Text fontSize="16px" fontWeight="bold">
              {scoreText}
            </Text>
            <Flex alignItems="flex-end">
              <Text
                fontSize="46px"
                fontWeight="black"
                lineHeight="40px"
                marginRight={1}
                marginY={2}
              >
                {score}
              </Text>
              <Text
                color="#768389"
                fontSize="26px"
                fontWeight="bold"
                lineHeight="40px"
                marginBottom={1}
              >
                {`/ ${maxScore}`}
              </Text>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="bold">
              {timeText}
            </Text>
            <Text
              fontSize="46px"
              fontWeight="black"
              lineHeight="40px"
              marginY={2}
            >
              {secondsToMinutesString(time)}
            </Text>
          </Box>
        </Flex>

        {divider}

        <Box marginTop={8}>
          <GameOverModalExplainerText
            quizScoreType={quizScoreType}
            existingEntry={existingEntry}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            explainerTextOne={explainerTextOne}
            explainerActionOne={explainerActionOne}
            explainerTextTwo={explainerTextTwo}
            explainerActionTwo={explainerActionTwo}
            submitAScoreText={submitAScoreText}
            submitALeaderboardEntryText={submitALeaderboardEntryText}
            scoreQuizLoggedInExplainer={scoreQuizLoggedInExplainer}
            noExistingEntryExplainer={noExistingEntryExplainer}
            existingEntryText={existingEntryText}
            existingEntryExplainer={existingEntryExplainer}
            rankText={rankText}
            scoreText={scoreText}
            timeText={timeText}
            usernameText={usernameText}
            onRedirectWithScore={onRedirectWithScore}
          />
        </Box>
      </Box>
    </Modal>
  );
};

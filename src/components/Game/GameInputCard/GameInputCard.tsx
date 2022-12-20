import React, { FC, createRef, useEffect } from "react";

import {
  Box,
  Button,
  Divider,
  Fade,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { SolidCloseCircle } from "../../Icons";
import { Result } from "../../Results";
import { ResultsList } from "../../Results";
import { ExpiryTimestamp, QuizTypes } from "../Game.types";
import { GameInputCardScore } from "./GameInputCardScore";
import { GameInputCardTimer } from "./GameInputCardTimer";

const divider = <Divider borderColor="#E3E1E1" borderWidth={1} my={2} />;

export interface GameInputCardProps {
  typeId?: number;
  maxScore?: number;
  time?: number;
  hasFlags?: boolean;
  recents?: Result[];
  score?: number;
  expiryTimestamp?: ExpiryTimestamp;
  errorMessage?: string;
  hasGameRunOnce?: boolean;
  hasGameStarted?: boolean;
  hasGameStopped?: boolean;
  hasError?: boolean;
  inputValue?: string;
  inputPlaceholder?: string;
  giveUpText?: string;
  retryText?: string;
  startText?: string;
  noResultsMessage?: string;
  recentHeading?: string;
  scoreHeading?: string;
  closeCircleLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearInput?: () => void;
  onGameStart?: () => void;
  onGameStop?: () => void;
}

export const GameInputCard: FC<GameInputCardProps> = ({
  typeId = 0,
  maxScore = 0,
  time = 0,
  hasFlags = false,
  recents = [],
  score = 0,
  expiryTimestamp = { minutes: 0, seconds: 0 },
  errorMessage = "",
  hasGameRunOnce = false,
  hasGameStarted = false,
  hasGameStopped = false,
  hasError = false,
  inputValue = "",
  inputPlaceholder = "",
  giveUpText = "",
  retryText = "",
  startText = "",
  noResultsMessage = "",
  recentHeading = "",
  scoreHeading = "",
  closeCircleLabel = "",
  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {},
  onClearInput = (): void => {},
  onGameStart = (): void => {},
  onGameStop = (): void => {},
}) => {
  const inputRef = createRef<HTMLInputElement>();
  const isFlagGame = typeId === QuizTypes.FLAG;

  useEffect(() => {
    if (!isFlagGame && hasGameStarted) {
      inputRef.current.focus();
    }
  }, [hasGameStarted, isFlagGame]);

  const handleClearInput = (): void => {
    onClearInput();
    inputRef.current.focus();
  };

  return (
    <Flex backgroundColor="#F0F0F0" borderRadius={12} direction="column" p={5}>
      <Box mb={5}>
        <Text fontWeight="bold">{scoreHeading}</Text>
        <GameInputCardScore score={score} maxScore={maxScore} />
      </Box>
      {divider}
      {!isFlagGame && (
        <Box>
          <InputGroup position="relative">
            <Input
              ref={inputRef}
              isInvalid={hasError}
              isDisabled={!hasGameStarted}
              onChange={onChange}
              my={5}
              placeholder={inputPlaceholder}
              value={inputValue}
            />
            <Fade in={!!errorMessage} unmountOnExit>
              <Text
                fontWeight={600}
                color="red.500"
                position="absolute"
                top="60px"
                bottom={0}
                left={2}
                fontSize="xs"
              >
                {errorMessage}
              </Text>
            </Fade>
            <InputRightElement>
              {inputValue && (
                <Fade in={inputValue?.length > 0}>
                  <IconButton
                    aria-label={closeCircleLabel}
                    position="absolute"
                    top="27px"
                    right={3}
                    maxHeight="22px"
                    minWidth="22px"
                    backgroundColor="transparent"
                    borderRadius={25}
                    onClick={handleClearInput}
                    color={hasError ? "red.500" : "#a6a6a6"}
                    fontWeight="bold"
                    _hover={{
                      backgroundColor: "transparent",
                      color: "#5c5c5c",
                    }}
                  >
                    <SolidCloseCircle height={5} width={5} padding={0} />
                  </IconButton>
                </Fade>
              )}
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
      {!isFlagGame && divider}
      <Box my={4}>
        <GameInputCardTimer
          totalSeconds={time}
          expiryTimestamp={expiryTimestamp}
          hasGameStarted={hasGameStarted}
          hasGameStopped={hasGameStopped}
        />
      </Box>
      {divider}
      <Box my={4}>
        <Button
          colorScheme={hasGameStarted ? "red" : "green"}
          width="full"
          onClick={hasGameStarted ? onGameStop : onGameStart}
          p={8}
          size="lg"
        >
          <Text fontWeight="700" fontSize="24px">
            {hasGameStarted
              ? giveUpText
              : hasGameRunOnce
              ? retryText
              : startText}
          </Text>
        </Button>
      </Box>
      {divider}
      <Box mt={4}>
        <Text fontWeight="bold">{recentHeading}</Text>
        <ResultsList
          results={recents}
          noResultsMessage={noResultsMessage}
          hasFlags={hasFlags}
        />
      </Box>
    </Flex>
  );
};

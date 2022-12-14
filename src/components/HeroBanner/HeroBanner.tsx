import React, { FC, useEffect, useState } from "react";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { HeroBannerSubtitleAction } from "./HeroBanner.types";
import { HeroBannerText } from "./HeroBannerText";

export interface HeroBannerProps {
  textColor?: string;
  backgroundColor?: string;
  nextActionDelay?: number;
  fadeOutDelay?: number;
  image?: React.ReactNode;
  actions?: HeroBannerSubtitleAction[];
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
}

export const HeroBanner: FC<HeroBannerProps> = ({
  textColor = "white",
  backgroundColor = "linear-gradient(90deg, #27AE60 0%, #219250 100%)",
  nextActionDelay = 10000,
  fadeOutDelay = 1000,
  image = null,
  actions = [],
  isLoading = true,
  title = "",
  subtitle = "",
}) => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [index, setIndex] = useState(
    Math.floor(Math.random() * actions.length)
  );

  const delayedSetFadeOut = () =>
    setTimeout(() => {
      setShouldFadeOut(true);
    }, nextActionDelay);

  useEffect(() => {
    delayedSetFadeOut();
  }, []);

  useEffect(() => {
    delayedSetFadeOut();
  }, [index]);

  useEffect(() => {
    if (actions.length > 0 && shouldFadeOut) {
      setTimeout(() => {
        setIndex(index === actions.length - 1 ? 0 : index + 1);
        setShouldFadeOut(false);
      }, fadeOutDelay);
    }
  }, [shouldFadeOut]);

  return (
    <Box
      role="banner"
      position="relative"
      background={backgroundColor}
      height={["260px", "300px", "420px"]}
      width="100%"
    >
      <Flex
        position="absolute"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <Flex direction="column" justifyContent="center" overflow="hidden">
          {image}
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        width="100%"
        justifyContent="center"
        direction="column"
        padding={[3, 6, 12]}
        height="100%"
        textAlign="center"
      >
        <Heading
          as="h1"
          color={textColor}
          fontSize={["42px", "42px", "56px"]}
          fontWeight="black"
          lineHeight={{ base: "1.1", md: "1" }}
        >
          {title}
        </Heading>

        <Box
          marginY={5}
          marginX="auto"
          maxWidth={{ base: "340px", sm: "400px", md: "450px" }}
          className={shouldFadeOut ? "fade-out" : "fade-in"}
        >
          <Text
            color={textColor}
            fontSize={["18px", "18px", "24px"]}
            fontWeight="medium"
          >
            {`${subtitle} `}
            <HeroBannerText
              isLoading={isLoading}
              href={actions[index]?.link}
              text={actions[index]?.value}
            />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

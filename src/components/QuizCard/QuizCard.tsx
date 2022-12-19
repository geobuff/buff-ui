import React, { FC } from "react";

import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  FlexProps,
  Link,
  Text,
} from "@chakra-ui/react";

import { Twemoji } from "../Twemoji";

export interface QuizCardProps extends FlexProps {
  isMobile?: boolean;
  isEnabled?: boolean;
  isVerified?: boolean;
  href?: string;
  heading?: string;
  image?: JSX.Element;
  bottomLeftContent?: JSX.Element;
  bottomRightContent?: JSX.Element;
}

export const QuizCard: FC<QuizCardProps> = ({
  isMobile = false,
  isEnabled = true,
  isVerified = false,
  href = "",
  heading = "",
  image = null,
  bottomLeftContent = null,
  bottomRightContent = null,
  ...props
}) => {
  const content = (
    <Flex
      aria-label={`quiz card for ${heading}`}
      role="group"
      direction="column"
      backgroundColor="white"
      borderRadius={12}
      width="100%"
      height="100%"
      boxShadow="0px 4px 4px rgba(179, 187, 209, 0.25)"
      {...props}
    >
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        {image}
        <Flex paddingTop="12px" paddingX="12px" whiteSpace="pre-wrap">
          <Text
            fontWeight="bold"
            fontSize="18px"
            marginBottom="16px"
            noOfLines={2}
            _groupHover={{ textDecoration: "underline" }}
          >
            {!isMobile && isVerified && (
              <Flex
                direction="column"
                justifyContent="center"
                float="left"
                mr={1}
              >
                <Twemoji emoji="✅" width="20px" height="20px" mt="3.5px" />
              </Flex>
            )}{" "}
            {heading}
          </Text>
        </Flex>

        <Box position="absolute" bottom={0} left={0} right={0}>
          <Divider borderColor="#E3E1E1" borderWidth={1} my={2} />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginTop="8px"
            marginBottom="8px"
            marginX="12px"
          >
            <Flex alignItems="center">{bottomLeftContent}</Flex>
            <Flex alignItems="center">{bottomRightContent}</Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );

  const container = isMobile ? (
    <Box
      display="inline-block"
      width="180px"
      height="210px"
      marginRight={3}
      paddingY={3}
      opacity={!isEnabled ? "0.25" : "1"}
    >
      {content}
    </Box>
  ) : (
    <AspectRatio
      maxWidth="260px"
      minHeight={{
        base: "180px",
        sm: "206px",
        md: "216px",
      }}
      maxHeight="230px"
      ratio={3 / 2}
      transition="all 150ms ease-out"
      _hover={isEnabled && { transform: "scale(1.030)" }}
      opacity={!isEnabled ? "0.25" : "1"}
    >
      {content}
    </AspectRatio>
  );

  return href && isEnabled ? <Link href={href}>{container}</Link> : container;
};

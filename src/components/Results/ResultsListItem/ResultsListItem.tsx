import React, { FC } from "react";

import { Fade, Flex, FlexProps, Text } from "@chakra-ui/react";

import { CustomFlag } from "../../CustomFlag";
import { Twemoji } from "../../Twemoji";
import { FlagFallback } from "../FlagFallback";

export interface ResultsListItemProps extends FlexProps {
  code?: string;
  flagUrl?: string;
  isHidden?: boolean;
  isMissedResult?: boolean;
  svgName?: string;
  hasFlag?: boolean;
  shouldFadeIn?: boolean;
}

export const ResultsListItem: FC<ResultsListItemProps> = ({
  code = "",
  flagUrl = "",
  isHidden = false,
  isMissedResult = false,
  svgName = "",
  hasFlag = false,
  shouldFadeIn = false,
  ...props
}) => {
  const mainContent = (
    <Flex alignItems="center" marginY={2} {...props}>
      {hasFlag ? (
        <>
          {!isHidden && !isMissedResult && flagUrl ? (
            <CustomFlag url={flagUrl} code={code} />
          ) : (
            <FlagFallback />
          )}
        </>
      ) : (
        <Twemoji
          emoji={isHidden ? "🔲" : isMissedResult ? "❌" : "✅"}
          height="18px"
          width="18px"
        />
      )}
      <Text
        ml={2}
        fontWeight="600"
        fontSize={14}
        color={isMissedResult && "#e24f4f"}
      >
        {!isHidden ? svgName : "???"}
      </Text>
    </Flex>
  );

  return <> {shouldFadeIn ? <Fade in> {mainContent} </Fade> : mainContent} </>;
};

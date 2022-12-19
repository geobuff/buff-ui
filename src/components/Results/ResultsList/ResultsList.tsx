import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

import { Result } from "../Results.types";
import { ResultsListItem } from "../ResultsListItem";

export interface ResultsListProps {
  results?: Result[];
  hasFlags?: boolean;
  noResultsMessage?: string;
}

export const ResultsList: FC<ResultsListProps> = ({
  results = [],
  hasFlags = false,
  noResultsMessage = "",
}) => {
  if (!results || results.length === 0) {
    return (
      <Box backgroundColor="#F0F0F0" borderRadius={12} p={5}>
        <Text textAlign="center" opacity={0.5} fontWeight={500}>
          {noResultsMessage}
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      {results.map((result) => (
        <ResultsListItem
          key={result.code}
          code={result.code}
          flagUrl={result.flagUrl}
          svgName={result.svgName}
          isHidden={result.isHidden}
          isMissedResult={result.isMissedResult}
          hasFlag={hasFlags}
          shouldFadeIn
          my={1}
        />
      ))}
    </Box>
  );
};

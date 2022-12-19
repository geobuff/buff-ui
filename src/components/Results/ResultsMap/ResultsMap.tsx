import React, { FC, useMemo } from "react";

import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import {
  AutoSizerProps,
  ListProps,
  AutoSizer as _AutoSizer,
  List as _List,
} from "react-virtualized";

import { MappingEntry } from "../Results.types";
import { getResults } from "../Results.utils";
import { ResultsListItem } from "../ResultsListItem";
import { ResultMap } from "./ResultsMap.types";
import SectionList from "./SectionList";

const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

const HEADER_HEIGHT = 50;
const ROW_HEIGHT = 28;

export interface ResultsMapProps {
  heading?: string;
  map?: ResultMap;
  checked?: MappingEntry[];
  hasHeader?: boolean;
  hasGameStopped?: boolean;
  hasGroupings?: boolean;
  hasFlags?: boolean;
}

export const ResultsMap: FC<ResultsMapProps> = ({
  heading = "",
  map = {},
  checked = [],
  hasHeader = true,
  hasGameStopped = false,
  hasGroupings = false,
  hasFlags = false,
}) => {
  const results = useMemo(
    () =>
      Object.entries(map).map(([key, mapping]) => ({
        title: key,
        data: getResults(mapping, checked, hasGameStopped),
      })),
    [map, checked, hasGameStopped]
  );

  const resultRows = results[0]?.data;

  const renderHeader = (row: any): React.ReactNode => (
    <Box key={row.key} style={row.style}>
      <Box height="100%" marginTop={4}>
        <Text fontSize="18px" fontWeight="bold" textTransform="uppercase">
          {row.title}
        </Text>
      </Box>
    </Box>
  );

  const renderSectionRow = (row: any): React.ReactNode => (
    <Box key={row.key} style={row.style}>
      <ResultsListItem
        code={row.item.code}
        flagUrl={row.item.flagUrl}
        svgName={row.item.svgName}
        isHidden={row.item.isHidden}
        isMissedResult={row.item.isMissedResult}
        hasFlag={hasFlags}
      />
    </Box>
  );

  const renderListRow = (row: any): React.ReactNode => (
    <Box key={row.key} style={row.style}>
      <ResultsListItem
        code={resultRows[row.index].code}
        flagUrl={resultRows[row.index].flagUrl}
        svgName={resultRows[row.index].svgName}
        isHidden={resultRows[row.index].isHidden}
        isMissedResult={resultRows[row.index].isMissedResult}
        hasFlag={hasFlags}
      />
    </Box>
  );

  return (
    <Box textAlign="left" height="100%">
      {hasHeader && (
        <>
          <Divider my={3} />
          <Text fontSize="xl" fontWeight="bold">
            {heading}
          </Text>
          <Divider my={3} />
        </>
      )}

      <Flex
        direction="column"
        height={{ base: "100%", sm: "75%" }}
        minHeight="400px"
      >
        <Box flex="1 1 auto">
          {!!results.length && (
            <AutoSizer>
              {(x: any): React.ReactNode => (
                <>
                  {hasGroupings ? (
                    <SectionList
                      width={x.width}
                      height={x.height}
                      sections={results}
                      sectionHeaderRenderer={renderHeader}
                      sectionHeaderHeight={HEADER_HEIGHT}
                      rowHeight={ROW_HEIGHT}
                      rowRenderer={renderSectionRow}
                    />
                  ) : (
                    <List
                      width={x.width}
                      height={x.height}
                      rowCount={resultRows.length}
                      rowHeight={ROW_HEIGHT}
                      rowRenderer={renderListRow}
                    />
                  )}
                </>
              )}
            </AutoSizer>
          )}
        </Box>
      </Flex>
      <Box height={{ base: "35px", md: "20px", lg: "35px" }} />
    </Box>
  );
};

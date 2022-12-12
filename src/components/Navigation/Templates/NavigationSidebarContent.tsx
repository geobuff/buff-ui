import React from "react";

import { Box, Divider, Flex } from "@chakra-ui/react";

import { NavigationSidebarLink } from "../NavigationSidebar/NavigationSidebarLink";

export const sidebarContent = (
  <Flex
    as="nav"
    direction="column"
    height="100%"
    justifyContent="space-between"
    paddingY={2}
  >
    <Flex direction="column" justifyContent="space-between">
      <Box>
        <NavigationSidebarLink href="/" emoji="🏡" label="Home" />
        <Divider borderColor="#E3E1E1" borderWidth={1} my={2} />
        <NavigationSidebarLink
          href="/leaderboard"
          emoji="🏆"
          label="Leaderboard"
        />
        <Divider borderColor="#E3E1E1" borderWidth={1} my={2} />
        <NavigationSidebarLink
          href="/daily-trivia"
          emoji="❓"
          label="Daily Trivia"
        />
      </Box>
    </Flex>
  </Flex>
);

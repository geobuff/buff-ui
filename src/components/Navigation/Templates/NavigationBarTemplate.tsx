import React from "react";

import { Box, FormControl, Link, Select, Text } from "@chakra-ui/react";

import { GeoBuffLogo } from "../../Icons";
import {
  NavigationBar,
  NavigationBarProps,
} from "../NavigationBar/NavigationBar";
import { NavigationBarLink } from "../NavigationBar/NavigationBarLink";
import { sidebarContent } from "./NavigationSidebarContent";

export const NavigationBarTemplate = (
  args: NavigationBarProps
): React.ReactNode => {
  const desktopLeftContent = (
    <>
      <Link href="/" _hover={{ textDecoration: "none" }} aria-label="Home link">
        <GeoBuffLogo />
      </Link>

      <NavigationBarLink
        href="/leaderboard"
        label="Leaderboard"
        marginLeft={6}
      />

      <NavigationBarLink
        href="/daily-trivia"
        label="Daily Trivia"
        isActive
        marginLeft={6}
      />

      <NavigationBarLink
        href="/community-quiz"
        label="Community"
        marginLeft={6}
      />
    </>
  );

  const desktopRightContent = (
    <FormControl>
      <Select>
        <option>English</option>
        <option>Te Reo Māori</option>
        <option>Español</option>
      </Select>
    </FormControl>
  );

  const mobileLeftContent = (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <GeoBuffLogo />
    </Link>
  );

  const mobileRightContent = (
    <Box minWidth="60px">
      <Text>Testing</Text>
    </Box>
  );

  return (
    <NavigationBar
      desktopLeftContent={desktopLeftContent}
      desktopRightContent={desktopRightContent}
      mobileLeftContent={mobileLeftContent}
      mobileRightContent={mobileRightContent}
      sidebarContent={sidebarContent}
      {...args}
    />
  );
};

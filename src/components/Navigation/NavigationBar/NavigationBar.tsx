import React, { FC, useEffect, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Squash as Hamburger } from "hamburger-react";

import { NavigationSidebar } from "../NavigationSidebar/NavigationSidebar";

export interface NavigationBarProps {
  isAppMobile: boolean;
  isMobile: boolean;
  desktopLeftContent: React.ReactNode;
  desktopRightContent: React.ReactNode;
  mobileLeftContent: React.ReactNode;
  mobileRightContent: React.ReactNode;
  sidebarContent: React.ReactNode;
  isSidebarOpen: boolean;
  onIsSidebarOpenChange: (isOpen: boolean) => void;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  isAppMobile,
  isMobile,
  desktopLeftContent,
  desktopRightContent,
  mobileLeftContent,
  mobileRightContent,
  sidebarContent,
  isSidebarOpen,
  onIsSidebarOpenChange,
}) => {
  const [zIndex, setZIndex] = useState(5);

  useEffect(() => {
    if (isSidebarOpen) {
      setZIndex(9999);
    } else {
      setTimeout(() => {
        setZIndex(5);
      }, 200);
    }
  }, [isSidebarOpen]);

  const desktopLayout = (
    <Flex alignItems="center" justifyContent="space-between" minHeight="56px">
      <Flex alignItems="center">{desktopLeftContent}</Flex>
      <Flex alignItems="center">{desktopRightContent}</Flex>
    </Flex>
  );

  const mobileLayout = (
    <Flex alignItems="center" justifyContent="space-between" minHeight="56px">
      <Flex alignItems="center">
        <Hamburger
          label="Toggle sidebar menu open"
          size={24}
          toggled={isSidebarOpen}
          toggle={onIsSidebarOpenChange}
        />
      </Flex>
      {mobileLeftContent}
      {mobileRightContent}
    </Flex>
  );

  return (
    <>
      <Box
        m={0}
        px={{ base: 3, md: 5 }}
        backgroundColor="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.08)"
        position="fixed"
        top={0}
        left={0}
        right={0}
        width="100%"
        zIndex={zIndex}
        minHeight="56px"
      >
        {isMobile ? mobileLayout : desktopLayout}
      </Box>
      {isMobile && (
        <NavigationSidebar
          isOpen={isSidebarOpen}
          isAppMobile={isAppMobile}
          onClose={() => onIsSidebarOpenChange(false)}
        >
          {sidebarContent}
        </NavigationSidebar>
      )}
    </>
  );
};

import React, { FC } from "react";

import { Box, BoxProps, ChakraProvider, Flex } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";
import { use100vh } from "react-div-100vh";
import { useSwipeable } from "react-swipeable";

import { theme as BuffUITheme } from "../../styles/theme";
import { ErrorAlertBanner } from "../ErrorAlertBanner";

export interface MainViewProps extends BoxProps {
  children?: React.ReactNode;
  theme?: Dict;
  isAppMobile?: boolean;
  isSimplePage?: boolean;
  hasFooter?: boolean;
  error?: string;
  navigationContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  onIsSidebarOpenChange?: (isOpen: boolean) => void;
}

export const MainView: FC<MainViewProps> = ({
  children = null,
  theme = BuffUITheme,
  isAppMobile = false,
  isSimplePage = false,
  hasFooter = true,
  error = "",
  navigationContent = null,
  footerContent = null,
  onIsSidebarOpenChange,
  ...props
}) => {
  const height = use100vh();

  const handlers = useSwipeable({
    onSwipedRight: () => isAppMobile && onIsSidebarOpenChange(true),
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  return (
    <ChakraProvider theme={theme}>
      <ErrorAlertBanner error={error} />
      <Flex
        as="main"
        direction="column"
        minHeight={height}
        width="100%"
        marginX="auto"
        flex={1}
        backgroundColor={
          isSimplePage ? { base: "#FFF", md: "#F0F0F0" } : "#F0F0F0"
        }
        {...props}
      >
        <Box
          position="fixed"
          width={6}
          top={0}
          left={0}
          bottom={0}
          zIndex={2}
          {...handlers}
        />
        {!isSimplePage && navigationContent}
        <Flex flex={1} direction="column" marginTop={!isSimplePage ? 14 : 0}>
          {children}
        </Flex>
        {hasFooter && height && footerContent}
      </Flex>
    </ChakraProvider>
  );
};

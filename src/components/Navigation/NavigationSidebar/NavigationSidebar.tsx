import React, { FC } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";

export interface NavigationSidebarProps extends DrawerProps {
  isOpen: boolean;
  isAppMobile: boolean;
  onClose: () => void;
}

export const NavigationSidebar: FC<NavigationSidebarProps> = ({
  isOpen,
  isAppMobile,
  children,
  onClose,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => isAppMobile && onClose(),
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody marginTop="72px" {...handlers}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

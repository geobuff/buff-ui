import React, { FC, createRef, useEffect } from "react";

import { Box } from "@chakra-ui/react";
import Sheet from "react-modal-sheet";

const snapPoints = [600, 400, 300, 90];
const initialSnap = snapPoints.length - 2;

export interface BottomSheetProps {
  children: React.ReactNode;
  isOpen?: boolean;
  isMinimised?: boolean;
}

export const BottomSheet: FC<BottomSheetProps> = ({
  children = null,
  isOpen = false,
  isMinimised = false,
}) => {
  const ref = createRef<any>();

  useEffect(() => {
    if (isMinimised) {
      ref?.current?.snapTo(snapPoints.length - 1);
    }
  }, [isMinimised, ref]);

  return (
    <Box
      ref={ref}
      as={Sheet}
      isOpen={isOpen}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      mt="120px"
      top="100% !important"
      minHeight="92vh"
      zIndex="1000 !important"
      springConfig={{
        stiffness: 600,
        damping: 60,
        mass: 0.2,
      }}
      onClose={(): void => {}}
    >
      <Sheet.Container style={{ position: "fixed" }}>
        <Box as={Sheet.Header} />
        <Box
          margin="auto"
          borderRadius={25}
          height={"4.35px"}
          width={8}
          backgroundColor="#dddddd"
          mb={3}
          marginTop={-4}
        />

        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
    </Box>
  );
};

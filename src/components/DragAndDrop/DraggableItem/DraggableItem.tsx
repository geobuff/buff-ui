import React, { FC, useEffect } from "react";

import { Box, BoxProps } from "@chakra-ui/react";
import { DragSourceMonitor, useDrag } from "react-dnd";

import { DragItem } from "../DragAndDrop.types";
import { CollectResult, DragResult } from "./DraggableItem.types";

export interface DraggableItemProps extends BoxProps {
  children?: React.ReactNode;
  code?: string;
  url?: string;
  type?: string;
  checkSubmission?: (submission: string) => void;
  handleDragging?: (dragItem: DragItem) => void;
}

export const DraggableItem: FC<DraggableItemProps> = ({
  children = null,
  code = "",
  url = "",
  type = "",
  checkSubmission = () => {},
  handleDragging = () => {},
  ...props
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { name: code },
    end: (item: DragResult, monitor: DragSourceMonitor): void => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        checkSubmission(item.name);
      }
    },
    collect: (monitor: DragSourceMonitor): CollectResult => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  useEffect(() => {
    handleDragging({ isDragging, code, url });
  }, [isDragging]);

  return (
    <Box
      ref={drag}
      role="Flag"
      opacity={isDragging ? 0.4 : 1}
      cursor="pointer"
      display="inline-block"
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

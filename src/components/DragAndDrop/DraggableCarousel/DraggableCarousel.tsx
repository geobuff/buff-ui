import React, { FC, useEffect } from "react";

import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { DelayedRender } from "../../DelayedRender";
import { DragItem } from "../DragAndDrop.types";
import { RESPONSIVE_CONFIG } from "./DraggableCarousel.types";
import { DraggableCarouselButton } from "./DraggableCarouselButton";

const getCarouselThreshold = (
  resConfig: ResponsiveType,
  resBreakpoints: boolean[]
): number => {
  const currentBreakpointIndex = resBreakpoints.findIndex(
    (breakpoint) => String(breakpoint) === "true"
  );
  const currentConfig =
    resConfig[Object.keys(resConfig)[currentBreakpointIndex]];

  return currentConfig?.items || 0;
};

export interface DraggableCarouselProps {
  isAppMobile?: boolean;
  items?: React.ReactNode[];
  noItemsMessage?: string;
  handleDragging?: (dragItem: DragItem) => void;
}

export const DraggableCarousel: FC<DraggableCarouselProps> = ({
  isAppMobile = false,
  items = [],
  noItemsMessage = "",
  handleDragging = () => {},
}) => {
  const responsiveBreakpoints = useMediaQuery([
    "(max-width: 3000px) and (min-width: 1000px)",
    "(max-width: 1000px) and (min-width: 600px)",
    "(max-width: 600px) and (min-width: 500px)",
    "(max-width: 500px) and (min-width: 375px)",
    "(max-width: 375px) and (min-width: 0 px)",
  ]);

  const carouselThreshold = getCarouselThreshold(
    RESPONSIVE_CONFIG,
    responsiveBreakpoints
  );

  useEffect(() => {
    if (items.length <= carouselThreshold) {
      handleDragging({ code: "", isDragging: false, url: "" });
    }
    // Including handleDragging here will cause infinite loop.
  }, [items, carouselThreshold]);

  if (items.length <= carouselThreshold) {
    return (
      <Flex
        width="100%"
        position="relative"
        height="100px"
        alignItems="center"
        justifyContent="center"
      >
        {items.length > 0 ? (
          items.map((item) => item)
        ) : (
          <DelayedRender shouldFadeIn>
            <Box paddingY={4} width="100%" textAlign="center">
              <Text fontSize="20px" color="gray.500" fontWeight={700} mr={1}>
                {noItemsMessage}
              </Text>
            </Box>
          </DelayedRender>
        )}
      </Flex>
    );
  }

  return (
    <Carousel
      ssr={isAppMobile}
      deviceType={isAppMobile && "mobile"}
      infinite
      centerMode
      responsive={RESPONSIVE_CONFIG}
      customTransition="transform 150ms ease-in-out"
      customLeftArrow={<DraggableCarouselButton position="left" />}
      customRightArrow={<DraggableCarouselButton position="right" />}
      itemClass="flex center"
      containerClass="fade-in"
    >
      {items.map((item) => item)}
    </Carousel>
  );
};

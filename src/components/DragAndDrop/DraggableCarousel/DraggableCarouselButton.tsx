import React, { FC } from "react";

import { IconButton } from "@chakra-ui/react";

import { ArrowLeft, ArrowRight } from "../../Icons";
import { CarouselButtonPosition, ICON_PROPS } from "./DraggableCarousel.types";

export interface DraggableCarouselButtonProps {
  position: CarouselButtonPosition;
}

export const DraggableCarouselButton: FC<DraggableCarouselButtonProps> = ({
  position = "right",
  ...props
}) => {
  const isLeft = position === "left";
  const isRight = position === "right";

  const boxShadow = `
  ${isLeft ? "1px" : "-1px"} 4px 4px 2px rgb(179 187 209 / 25%)
  `;

  return (
    <IconButton
      aria-label={`scroll flag options ${position}`}
      position="absolute"
      transition="all .5s"
      borderRadius="35px"
      zIndex={2}
      boxShadow={boxShadow}
      background="white"
      minWidth="40px"
      minHeight="36px"
      cursor="pointer"
      left={isLeft ? "3px" : "initial"}
      right={isRight ? "3px" : "initial"}
      _hover={{ backgroundColor: "white" }}
      {...props}
    >
      {isLeft ? <ArrowLeft {...ICON_PROPS} /> : <ArrowRight {...ICON_PROPS} />}
    </IconButton>
  );
};

import React from "react";

import { Box } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DraggableItem } from "../DraggableItem";
import { DraggableCarousel, DraggableCarouselProps } from "./DraggableCarousel";

export default {
  title: "DND/DraggableCarousel",
  component: DraggableCarousel,
};

const Template = (args: DraggableCarouselProps) => (
  <DndProvider backend={HTML5Backend}>
    <Box width="500px">
      <DraggableCarousel {...args} />
    </Box>
  </DndProvider>
);

export const Default = Template.bind({});
Default.args = {
  isAppMobile: false,
  noItemsMessage: "Perfect score, well done! 🥳",
  items: [
    <DraggableItem key={1} mx={3}>
      <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ff.svg"
        width={100}
        height={100}
      />
    </DraggableItem>,
    <DraggableItem key={2} mx={3}>
      <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1f8.svg"
        width={100}
        height={100}
      />
    </DraggableItem>,
    <DraggableItem key={3} mx={3}>
      <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1ec.svg"
        width={100}
        height={100}
      />
    </DraggableItem>,
    <DraggableItem key={4} mx={3}>
      <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1ff.svg"
        width={100}
        height={100}
      />
    </DraggableItem>,
    <DraggableItem key={5} mx={3}>
      <img
        src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fb-1f1e8.svg"
        width={100}
        height={100}
      />
    </DraggableItem>,
  ],
};

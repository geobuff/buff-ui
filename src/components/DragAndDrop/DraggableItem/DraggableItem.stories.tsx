import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DraggableItem, DraggableItemProps } from "./DraggableItem";

export default {
  title: "DND/DraggableItem",
  component: DraggableItem,
};

const item = (
  <img
    src="https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ff.svg"
    width="100"
    height="100"
  />
);

const Template = (args: DraggableItemProps) => (
  <DndProvider backend={HTML5Backend}>
    <DraggableItem {...args}>{item}</DraggableItem>
  </DndProvider>
);

export const Default = Template.bind({});

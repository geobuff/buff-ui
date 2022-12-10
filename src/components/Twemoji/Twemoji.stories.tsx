import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Twemoji, TwemojiProps } from "./Twemoji";

export default {
  title: "UI/Twemoji",
  component: Twemoji,
} as ComponentMeta<typeof Twemoji>;

const Template: ComponentStory<typeof Twemoji> = (args: TwemojiProps) => (
  <Twemoji {...args} />
);

export const Default = Template.bind({});
Default.args = {
  emoji: "👋",
  height: 56,
  width: 56,
};

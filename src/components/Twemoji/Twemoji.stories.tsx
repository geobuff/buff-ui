import React from "react";

import { Twemoji, TwemojiProps } from "./Twemoji";

export default {
  title: "Components/Twemoji",
  component: Twemoji,
};

const Template = (args: TwemojiProps) => <Twemoji {...args} />;

export const Default = Template.bind({});
Default.args = {
  emoji: "👋",
  height: "24px",
  width: "24px",
};

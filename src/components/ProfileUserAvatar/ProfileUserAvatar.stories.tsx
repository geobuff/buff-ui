import React from "react";

import { ProfileUserAvatar, ProfileUserAvatarProps } from "./ProfileUserAvatar";

export default {
  title: "Components/ProfileUserAvatar",
  component: ProfileUserAvatar,
};

const Template = (args: ProfileUserAvatarProps) => (
  <ProfileUserAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  primaryImageUrl:
    "https://geobuff.sgp1.digitaloceanspaces.com/team/ash-primary.svg",
  secondaryImageUrl:
    "https://geobuff.sgp1.digitaloceanspaces.com/team/ash-secondary.svg",
  height: 130,
  width: 130,
  shape: "circle",
  hasBorder: true,
  isClickable: true,
};

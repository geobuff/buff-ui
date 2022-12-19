import React from "react";

import { LoadingImage, LoadingImageProps } from "./LoadingImage";

export default {
  title: "Components/LoadingImage",
  component: LoadingImage,
};

const Template = (args: LoadingImageProps) => <LoadingImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://twemoji.maxcdn.com/v/13.0.1/svg/1f1fa-1f1f8.svg",
  height: "200px",
  width: "300px",
  hasSkeleton: true,
};

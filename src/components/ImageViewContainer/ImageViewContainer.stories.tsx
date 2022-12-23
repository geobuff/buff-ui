import React from "react";

import { Image } from "@chakra-ui/react";

import { Card } from "../Card";
import {
  ImageViewContainer,
  ImageViewContainerProps,
} from "./ImageViewContainer";

export default {
  title: "Components/ImageViewContainer",
  component: ImageViewContainer,
};

const image = (
  <Image
    src="https://geobuff.com/_next/image?url=https%3A%2F%2Fgeobuff.sgp1.digitaloceanspaces.com%2Fmerch%2Ftee%2Fdan-back.jpg&w=640&q=75"
    width={500}
    height={333}
    objectFit="cover"
  />
);

const Template = (args: ImageViewContainerProps) => (
  <ImageViewContainer {...args}>{image}</ImageViewContainer>
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  background: "#F0F0F0",
  borderRadius: "12px",
  maxHeight: "333px",
  width: "500px",
};

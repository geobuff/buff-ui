import React from "react";

import { HeroBanner, HeroBannerProps } from "./HeroBanner";

export default {
  title: "Components/HeroBanner",
  component: HeroBanner,
};

const Template = (args: HeroBannerProps): React.ReactNode => (
  <HeroBanner {...args} />
);

const actions = [
  { link: "/merch", value: "cop one of our tees!" },
  {
    link: "/play/map-games",
    value: "play interactive map games.",
  },
  {
    link: "/play/flag-games",
    value: "play interactive flag games.",
  },
];

export const Default = Template.bind({});
Default.args = {
  textColor: "white",
  backgroundColor: "linear-gradient(90deg, #27AE60 0%, #219250 100%)",
  nextActionDelay: 1000,
  fadeOutDelay: 1000,
  actions: actions,
  isLoading: true,
  title: "Eat, Sleep, Quiz, Repeat",
  subtitle: "Create an account and ",
};

const image = (
  <img src="https://geobuff.sgp1.digitaloceanspaces.com/headers/world-map.svg" />
);

export const Image = Template.bind({});
Image.args = {
  textColor: "white",
  backgroundColor: "linear-gradient(90deg, #27AE60 0%, #219250 100%)",
  nextActionDelay: 1000,
  fadeOutDelay: 1000,
  image: image,
  actions: actions,
  isLoading: true,
  title: "Eat, Sleep, Quiz, Repeat",
  subtitle: "Create an account and ",
};

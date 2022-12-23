import React from "react";

import { SVGMap } from "./SVGMap";
import {
  SVGMapTemplate,
  SVGMapTemplateProps,
} from "./Templates/SVGMapTemplate";
import { WorldCountries } from "./Templates/WorldCountries";

export default {
  title: "SVGMap/SVGMap",
  component: SVGMap,
};

const Template = (args: SVGMapTemplateProps) => <SVGMapTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  map: WorldCountries,
  mapStyle: {
    height: "400px",
    width: "100%",
    fill: "#6dca94",
  },
};

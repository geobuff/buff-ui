import React from "react";

import { Box } from "@chakra-ui/react";

import { SVGMap } from "../SVGMap/SVGMap";
import { WorldCountries } from "../SVGMap/Templates";
import { SVGMapContainer, SVGMapContainerProps } from "./SVGMapContainer";

export default {
  title: "SVGMap/SVGMapContainer",
  component: SVGMapContainer,
};

const Template = (args: SVGMapContainerProps) => {
  const mapStyle = {
    height: args.isMobile ? "initial" : "90vh",
    minWidth: args.isMobile ? "initial" : "100%",
    fill: "#6DCA94",
    margin: "12px",
  };

  return (
    <Box width="100%" height="100vh" background="#276F86">
      <SVGMapContainer {...args}>
        <SVGMap map={WorldCountries} mapStyle={mapStyle} />
      </SVGMapContainer>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
};

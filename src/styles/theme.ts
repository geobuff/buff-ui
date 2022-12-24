import { extendTheme } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import { colors } from "./colors";
import { Input } from "./input";
import Table from "./table";

const mobileStyles = {
  html: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  body: {
    height: "100%",
    overflow: "auto",
    position: "relative",
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Input,
    Table,
  },
  styles: {
    global: {
      html: {
        ...(isMobile ? mobileStyles.html : {}),
      },
      body: {
        ...(isMobile ? mobileStyles.body : {}),
      },
    },
  },
});

import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { Input } from "./input";
import Table from "./table";

export const theme = extendTheme({
  colors,
  components: {
    Input,
    Table,
  },
});

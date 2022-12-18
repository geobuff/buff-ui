import React from "react";

import { Text } from "@chakra-ui/react";

import { Twemoji } from "../../Twemoji";

export const bottomLeftContent = (
  <>
    <Twemoji emoji="⏱" height="12px" width="12px" />
    <Text
      fontSize={{ base: "9px", sm: "9px", md: "11px" }}
      fontWeight="bold"
      marginLeft="2.5px"
      noOfLines={1}
      minWidth="50%"
    >
      {`5:00 mins`}
    </Text>
  </>
);

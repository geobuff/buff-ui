import React from "react";

import { Text } from "@chakra-ui/react";

import { Twemoji } from "../../Twemoji";

export const bottomRightContent = (
  <>
    <Twemoji emoji="❓" height="12px" width="12px" />
    <Text
      fontSize={{ base: "9px", sm: "9px", md: "11px" }}
      fontWeight="bold"
      marginLeft="2.5px"
      minWidth="50%"
      maxWidth={{ base: "65px", md: "85px" }}
      noOfLines={1}
    >
      {`197 countries`}
    </Text>
  </>
);

import React from "react";

import { Text } from "@chakra-ui/react";

import { Twemoji } from "../../../Twemoji";
import { TableCellEntry } from "../Table.types";

export const rows: TableCellEntry[][] = [
  [
    { node: <Twemoji key={1} emoji="🥇" /> },
    { node: <Text key={1}>teamgeobuff</Text>, minWidth: "200px" },
    { node: <Text key={1}>05:00</Text>, isNumeric: true },
    { node: <Text key={1}>197</Text>, isNumeric: true },
  ],
  [
    { node: <Twemoji key={2} emoji="🥈" /> },
    { node: <Text key={1}>willy</Text>, minWidth: "200px" },
    { node: <Text key={1}>06:52</Text>, isNumeric: true },
    { node: <Text key={1}>197</Text>, isNumeric: true },
  ],
  [
    { node: <Twemoji key={3} emoji="🥉" /> },
    { node: <Text key={1}>kathy2.0</Text>, minWidth: "200px" },
    { node: <Text key={1}>11:10</Text>, isNumeric: true },
    { node: <Text key={1}>197</Text>, isNumeric: true },
  ],
];

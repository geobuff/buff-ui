import React, { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";
import twemoji from "twemoji";

export interface TwemojiProps extends BoxProps {
  emoji?: string;
  height?: string | number;
  width?: string | number;
}

export const Twemoji: FC<TwemojiProps> = ({
  emoji = "🇳🇿",
  height = 24,
  width = 24,
  ...props
}) => (
  <Box
    as="span"
    display="inline-block"
    width={width}
    height={height}
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
    {...props}
  />
);

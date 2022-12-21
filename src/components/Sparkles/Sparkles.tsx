import React, { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";

import { Sparkle } from "./Sparkle/Sparkle";
import { generateSparkle, range } from "./Sparkles.utils";
import { useRandomInterval } from "./useRandomInterval";

export interface SparklesProps extends BoxProps {
  color?: string;
  showSparkles?: boolean;
}

export const Sparkles: FC<SparklesProps> = ({
  children = null,
  color = "#FFC700",
  showSparkles = true,
  ...props
}) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(0, 3).map(() => generateSparkle(color));
  });

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    200,
    600
  );

  return (
    <Box position="relative" display="inline-block" {...props}>
      {showSparkles &&
        sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            color={sparkle.color}
            size={sparkle.size}
            style={sparkle.style}
          />
        ))}
      <Box as="strong" fontWeight="bold" position="relative" zIndex={100}>
        {children}
      </Box>
    </Box>
  );
};

import { keyframes } from "@chakra-ui/react";

export interface SparkleStyle {
  top: string;
  left: string;
}

export interface SparkleBase {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: SparkleStyle;
}

export const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

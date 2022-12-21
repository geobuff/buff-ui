import { SparkleBase } from "./Sparkles.types";

export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export const range = (start: number, end: number, step = 1): number[] => {
  const output: number[] = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const generateSparkle = (color: string): SparkleBase => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
    },
  };
};

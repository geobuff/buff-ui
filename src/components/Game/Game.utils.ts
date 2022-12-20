export const toMinTwoDigits = (time: number): string =>
  time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

export const secondsToMinutesString = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  return `${padLeft(minutes, "0", 2)}:${padLeft(seconds % 60, "0", 2)}`;
};

const padLeft = (input: number, pad: string, length: number): string => {
  return (new Array(length + 1).join(pad) + input).slice(-length);
};

export const formatNumber = (value: number): string =>
  value.toLocaleString("en-US", { maximumFractionDigits: 2 });

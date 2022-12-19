import { MappingEntry, Result } from "./Results.types";

export const getResults = (
  mapping: MappingEntry[],
  checked: MappingEntry[],
  hasGameStopped: boolean
): Result[] => {
  return hasGameStopped
    ? mapping.map((x) => {
        return {
          name: x.name,
          code: x.code,
          flagUrl: x.flagUrl,
          svgName: x.svgName,
          isHidden: false,
          isMissedResult: !checked.map((x) => x.name).includes(x.name),
        };
      })
    : mergeArrayByName(mapping, checked).map((x) => {
        return {
          name: x.name,
          code: x.code,
          flagUrl: x.flagUrl,
          svgName: x.svgName,
          isHidden: !checked.map((x) => x.name).includes(x.name),
          isMissedResult: false,
        };
      });
};

export const mergeArrayByName = (
  mapping: MappingEntry[],
  checked: MappingEntry[]
): MappingEntry[] =>
  mapping.map((x) => ({
    ...checked.find((item) => item.name === x.name && item),
    ...x,
  }));

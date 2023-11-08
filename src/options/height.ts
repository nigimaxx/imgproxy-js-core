import type { Height, HeightOptionsPartial } from "../types/height";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: HeightOptionsPartial): Height | undefined =>
  options.height || options.h;

const test = (options: HeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: HeightOptionsPartial): string => {
  const heightOpts = getOpt(options);

  guardParamIsUndef(heightOpts, "height");
  if (typeof heightOpts !== "number") {
    throw new Error("height option is not a number");
  }
  if (heightOpts < 0) {
    throw new Error("height option is can't be less than 0");
  }

  return `h:${heightOpts}`;
};

export { test, build };

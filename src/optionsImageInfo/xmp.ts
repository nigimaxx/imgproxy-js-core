import type { Xmp, XmpImageInfoOptionsPartial } from "../typesImageInfo/xmp";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: XmpImageInfoOptionsPartial): Xmp | undefined => {
  if ("xmp" in options) {
    return options.xmp;
  }

  return undefined;
};

const test = (options: XmpImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: XmpImageInfoOptionsPartial): string => {
  const xmpOpts = getOpt(options);
  guardParamIsUndef(xmpOpts, "XMP");
  return `xmp:${normalizeBoolean(xmpOpts)}`;
};

export { test, build };

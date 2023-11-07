import type {
  ReturnAttachment,
  ReturnAttachmentOptionsPartial,
} from "../types/returnAttachment";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: ReturnAttachmentOptionsPartial
): ReturnAttachment | undefined => {
  if ("return_attachment" in options) {
    return options.return_attachment;
  } else if ("ra" in options) {
    return options.ra;
  }

  return undefined;
};

const test = (options: ReturnAttachmentOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ReturnAttachmentOptionsPartial): string => {
  const returnAttachment = getOpt(options);
  errorParamIsUndef(returnAttachment, "return_attachment");
  return `ra:${normalizeBoolean(returnAttachment as ReturnAttachment)}`;
};

export { test, build };

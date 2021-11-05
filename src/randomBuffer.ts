import crypto from "crypto";

export function randomBuffer(): Buffer {
  return crypto.randomBytes(16);
}

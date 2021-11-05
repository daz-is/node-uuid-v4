import { randomBuffer } from "./randomBuffer";
import { WrappedString } from "./wrappedString";

export function uuidV4(randomBytes = randomBuffer()): string {
  // As per spec section 4.4
  // See: https://datatracker.ietf.org/doc/html/rfc4122#page-14
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

  const str = randomBytes.toString("hex");
  return new WrappedString(str)
    .insert("-", 20)
    .insert("-", 16)
    .insert("-", 12)
    .insert("-", 8)
    .unwrap();
}

import { randomBuffer } from "./randomBuffer";
import { uuidV4 } from "./uuidV4";

describe("UUID V4", () => {
  it("equality", () => {
    const randomBytes = randomBuffer();
    const uuid1 = uuidV4(randomBytes);
    const uuid2 = uuidV4(randomBytes);
    expect(uuid1).toEqual(uuid2);
  });

  it("not equal", () => {
    const uuid1 = uuidV4();
    const uuid2 = uuidV4();
    expect(uuid1).not.toEqual(uuid2);
  });

  it("correct uuid format", () => {
    const uuid = uuidV4();
    expect(uuid).toHaveLength(36);
    const parts = uuid.split("-");
    expect(parts).toHaveLength(5);
    expect(parts[0]).toHaveLength(8);
    expect(parts[1]).toHaveLength(4);
    expect(parts[2]).toHaveLength(4);
    expect(parts[3]).toHaveLength(4);
    expect(parts[4]).toHaveLength(12);
  });
});

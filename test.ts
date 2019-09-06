
import thenP from "./index.ts";

test(() => {
  return thenP((value) => expect(value).toBe("a"))(Promise.resolve("a"));
});

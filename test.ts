
import thenP from "./index";

test(() => {
  return thenP((value) => expect(value).toBe("a"))(Promise.resolve("a"));
});

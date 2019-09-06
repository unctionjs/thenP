
import thenP from "./index";

test("works", () => {
  return thenP((value) => expect(value).toBe("a"))(Promise.resolve("a"));
});


import {test} from "tap";

import thenP from "./";

test(({equal}) => {
  return thenP((value) => equal(value, "a"))(Promise.resolve("a"));
});

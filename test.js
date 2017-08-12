/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import thenCatchP from "./source"

test(({equal}) => {
  return thenP((value) => equal(value, "a"))(Promise.resolve("a"))
})

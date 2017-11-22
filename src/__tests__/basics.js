/* @flow */

import Basic from "../basics";

test("async generator", async () => {
  const gen = Basic.asyncGen();
  const expectedResults = ["a", "b"];
  let i = 0;
  for await (const result of gen) {
    expect(result).toEqual(expectedResults[i]);
    console.log(`${result} == ${expectedResults[i]}`);
    i = i + 1;
  }
});

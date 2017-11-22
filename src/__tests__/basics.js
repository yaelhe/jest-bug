/* @flow */

import Basic from "../basics";

test("sync function", () => {
  const r = Basic.syncFunc("");
  expect(r).toEqual("ok syncFunc");
});

test("sync generator", () => {
  const gen = Basic.syncGen("");
  const expectedResults = [
    "ok syncGen yield 1",
    "ok syncGen yield 2",
    "ok syncGen return"
  ];
  let i = 0;
  for (const result of gen) {
    expect(result).toEqual(expectedResults[i]);
    i = i + 1;
  }
});

test("async function", async () => {
  const r = await Basic.asyncFunc("");
  expect(r).toEqual("ok asyncFunc");
});

test("async generator", async () => {
  const gen = Basic.asyncGen("");
  const expectedResults = [
    "ok syncGen yield 1",
    "ok syncGen yield 2",
    "ok syncGen return"
  ];
  let i = 0;
  for await (const result of gen) {
    expect(result).toEqual(expectedResults[i]);
    i = i + 1;
  }
});

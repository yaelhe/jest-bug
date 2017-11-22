import assert from "assert";

export default class Basic {
  static async *asyncGen(x: string): AsyncGenerator<string, string, any> {
    yield "a";
    return "b";
  }

  static async runTests() {
    const gen = Basic.asyncGen();
    const expectedResults = ["a", "b"];
    let i = 0;
    for await (const result of gen) {
      assert.equal(result, expectedResults[i]);
      console.log(`${result} == ${expectedResults[i]}`);
      i = i + 1;
    }
  }
}

if (require.main === module) {
  Basic.runTests();
}

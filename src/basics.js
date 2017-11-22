import assert from "assert";

/**
 * An example class with the 4 basic building blocks:
 * Sync/Async Function/Generator
 */
export default class Basic {
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static syncFunc(x: string): string {
    return x + "ok syncFunc";
  }

  static async asyncFunc(x: string): Promise<string> {
    await Basic.sleep(50);
    return x + "ok asyncFunc";
  }

  static *syncGen(x: string): Generator<string, string, any> {
    yield x + "ok syncGen yield 1";
    yield x + "ok syncGen yield 2";
    return x + "ok syncGen return";
  }

  static async *asyncGen(x: string): AsyncGenerator<string, string, any> {
    await Basic.sleep(50);
    yield x + "ok asyncGen yield 1";
    await Basic.sleep(50);
    yield x + "ok asyncGen yield 2";
    await Basic.sleep(50);
    return x + "ok asyncGen return";
  }

  static async runTests() {
    console.log("\nsync func =========================================");

    const result1 = Basic.syncFunc("");
    assert.equal(result1, "ok syncFunc");
    console.log(result1);

    console.log("\nsync gen ==========================================");

    const gen2 = Basic.syncGen("");
    const expectedResults2 = [
      "ok syncGen yield 1",
      "ok syncGen yield 2",
      "ok syncGen return"
    ];
    let i2 = 0;
    for (const result2 of gen2) {
      assert.equal(result2, expectedResults2[i2]);
      console.log(result2);
      i2 = i2 + 1;
    }

    console.log("\nasync func ========================================");

    const result3 = await Basic.asyncFunc("");
    assert.equal(result3, "ok asyncFunc");
    console.log(result3);

    console.log("\nasync gen =========================================");

    const gen4 = Basic.asyncGen("");
    const expectedResults4 = [
      "ok asyncGen yield 1",
      "ok asyncGen yield 2",
      "ok asyncGen return"
    ];
    let i4 = 0;
    for await (const result4 of gen4) {
      assert.equal(result4, expectedResults4[i4]);
      console.log(result4);
      i4 = i4 + 1;
    }

    console.log("\n===================================================");
  }
}

if (require.main === module) {
  console.log("called directly");
  Basic.runTests();
}

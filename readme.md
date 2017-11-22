# Jest bug

`npm install`

`npm run test-no-jest` succeeds, it runs the test without any test framework, just using assert.

`npm run test` fails but it should not.

Error given by jest:

```
 FAIL  src/__tests__/basics.js
  ✕ async generator (1ms)

  ● async generator

    TypeError: iterable[Symbol.iterator] is not a function

      at _asyncIterator (src/__tests__/basics.js:3:421)
      at _callee2$ (src/__tests__/basics.js:36:138)
      at step (src/__tests__/basics.js:3:663)
      at src/__tests__/basics.js:3:893
          at Promise (<anonymous>)
      at Object.<anonymous> (src/__tests__/basics.js:3:574)
          at Promise (<anonymous>)
          at <anonymous>

Test Suites: 1 failed, 1 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        0.269s, estimated 1s
Ran all test suites.
-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
All files  |    21.95 |       50 |    71.43 |       20 |                |
 basics.js |    21.95 |       50 |    71.43 |       20 |... 76,79,84,85 |
-----------|----------|----------|----------|----------|----------------|
```

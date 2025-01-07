// Create test data
const SIZE = 1_000_000;
const testData = Array.from({ length: SIZE }, (_, i) => i);
const searchValue = SIZE - 1; // Search for the last element

// Prepare data structures
const array = testData;
const set = new Set(testData);

// Group: includes
Deno.bench({
  name: "Array: includes",
  fn: () => {
    array.includes(searchValue);
  },
  baseline: true,
  group: "includes",
});

Deno.bench({
  name: "Set: has",
  fn: () => {
    set.has(searchValue);
  },
  group: "includes",
});

// Group: add
Deno.bench({
  name: "Array: add element",
  fn: () => {
    const testArray = array.slice(); // Use slice instead of spread for better performance
    testArray.push(SIZE);
  },
  group: "add",
  baseline: true,
});

Deno.bench({
  name: "Set: add element",
  fn: () => {
    const testSet = new Set(set); // Directly clone the Set
    testSet.add(SIZE);
  },
  group: "add",
});

// Group: delete
Deno.bench({
  name: "Array: delete element",
  fn: () => {
    const testArray = array.slice(); // Use slice instead of spread for better performance
    const index = testArray.indexOf(searchValue);
    if (index > -1) {
      testArray.splice(index, 1);
    }
  },
  baseline: true,
  group: "delete",
});

Deno.bench({
  name: "Set: delete element",
  fn: () => {
    const testSet = new Set(set); // Directly clone the Set
    testSet.delete(searchValue);
  },
  group: "delete",
});

// Group: iterate
Deno.bench({
  name: "Array: iterate",
  fn: () => {
    for (const item of array) {
      // Do nothing
    }
  },
  group: "iterate",
  baseline: true,
});

Deno.bench({
  name: "Set: iterate",
  fn: () => {
    for (const item of set) {
      // Do nothing
    }
  },
  group: "iterate",
});

// Group: clear
Deno.bench({
  name: "Array: clear",
  fn: () => {
    const testArray = array.slice();
    testArray.length = 0;
  },
  group: "clear",
  baseline: true,
});

Deno.bench({
  name: "Set: clear",
  fn: () => {
    const testSet = new Set(set);
    testSet.clear();
  },
  group: "clear",
});

// Group: size check
Deno.bench({
  name: "Array: size check",
  fn: () => {
    const size = array.length;
  },
  group: "size",
  baseline: true,
});

Deno.bench({
  name: "Set: size check",
  fn: () => {
    const size = set.size;
  },
  group: "size",
});

// Group: filter
Deno.bench({
  name: "Array: filter",
  fn: () => {
    const filtered = array.filter((item) => item % 2 === 0);
  },
  group: "filter",
  baseline: true,
});

Deno.bench({
  name: "Set: filter",
  fn: () => {
    const filtered = Array.from(set).filter((item) => item % 2 === 0);
  },
  group: "filter",
});

// Group: merge
Deno.bench({
  name: "Array: merge",
  fn: () => {
    const merged = array.concat([SIZE, SIZE + 1, SIZE + 2]);
  },
  group: "merge",
  baseline: true,
});

Deno.bench({
  name: "Set: merge",
  fn: () => {
    const testSet = new Set(set);
    [SIZE, SIZE + 1, SIZE + 2].forEach((item) => testSet.add(item));
  },
  group: "merge",
});

// Create test data
const SIZE = 1_000_000;
const testData = Array.from({ length: SIZE }, (_, i) => i);
const searchValue = SIZE - 1; // Search for the last element

// Prepare data structures
const array = testData;
const set = new Set(testData);

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

Deno.bench({
  name: "Array: add element",
  fn: () => {
    const testArray = array.slice(); // Use `slice` instead of spread for better performance
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

Deno.bench({
  name: "Array: delete element",
  fn: () => {
    const testArray = array.slice(); // Use `slice` instead of spread for better performance
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

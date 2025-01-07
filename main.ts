export function add(a: number, b: number): number {
  return a + b;
}

// Create test data
const SIZE = 30000;
const testData = Array.from({ length: SIZE }, (_, i) => i);
const searchValue = SIZE - 1; // Will search for last element

// Prepare data structures
const array = [...testData];
const set = new Set(testData);

// Benchmark tests
Deno.bench("Array: includes", () => {
  array.includes(searchValue);
});

Deno.bench("Set: has", () => {
  set.has(searchValue);
});

Deno.bench("Array: add element", () => {
  const testArray = [...array];
  testArray.push(SIZE);
});

Deno.bench("Set: add element", () => {
  const testSet = new Set(set);
  testSet.add(SIZE);
});

Deno.bench("Array: delete element", () => {
  const testArray = [...array];
  const index = testArray.indexOf(searchValue);
  if (index > -1) {
    testArray.splice(index, 1);
  }
});

Deno.bench("Set: delete element", () => {
  const testSet = new Set(set);
  testSet.delete(searchValue);
});

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
Deno.bench("hello world #1", { baseline: true }, () => {
  new URL("https://deno.land");
});

// Compact form: named function.
Deno.bench(function helloWorld3() {
  new URL("https://deno.land");
});

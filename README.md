# Performance Benchmark: Array vs Set in JavaScript

This repository benchmarks various operations on JavaScript Arrays and Sets. Below are the results and comparisons for different methods grouped by functionality.

## Benchmark Results

### Group: Includes

| Method          | Time/Iter (avg) | Iter/s (min … max)             | p75      | p99     | p995    |
| --------------- | --------------- | ------------------------------ | -------- | ------- | ------- |
| Array: includes | 616.4 µs        | 1,622 (477.0 µs … 2.7 ms)      | 648.6 µs | 1.4 ms  | 1.9 ms  |
| Set: has        | 6.0 ns          | 166,100,000 (5.1 ns … 32.9 ns) | 5.2 ns   | 11.8 ns | 15.7 ns |

**Summary**: Array: includes is **102400x slower** than Set: has.

### Group: Add

| Method             | Time/Iter (avg) | Iter/s (min … max)       | p75     | p99     | p995    |
| ------------------ | --------------- | ------------------------ | ------- | ------- | ------- |
| Array: add element | 9.6 ms          | 104.4 (6.1 ms … 36.7 ms) | 8.7 ms  | 36.7 ms | 36.7 ms |
| Set: add element   | 35.0 ms         | 28.6 (33.3 ms … 37.3 ms) | 35.3 ms | 37.3 ms | 37.3 ms |

**Summary**: Array: add element is **3.66x faster** than Set: add element.

### Group: Delete

| Method                | Time/Iter (avg) | Iter/s (min … max)        | p75     | p99      | p995     |
| --------------------- | --------------- | ------------------------- | ------- | -------- | -------- |
| Array: delete element | 3.5 ms          | 288.8 (3.1 ms … 5.6 ms)   | 3.6 ms  | 5.6 ms   | 5.6 ms   |
| Set: delete element   | 45.3 ms         | 22.1 (33.7 ms … 115.6 ms) | 44.1 ms | 115.6 ms | 115.6 ms |

**Summary**: Array: delete element is **13.09x faster** than Set: delete element.

### Group: Iterate

| Method         | Time/Iter (avg) | Iter/s (min … max)       | p75     | p99     | p995    |
| -------------- | --------------- | ------------------------ | ------- | ------- | ------- |
| Array: iterate | 12.4 ms         | 80.5 (10.6 ms … 18.8 ms) | 13.5 ms | 18.8 ms | 18.8 ms |
| Set: iterate   | 11.2 ms         | 89.3 (10.6 ms … 17.6 ms) | 11.2 ms | 17.6 ms | 17.6 ms |

**Summary**: Array: iterate is **1.11x slower** than Set: iterate.

### Group: Clear

| Method       | Time/Iter (avg) | Iter/s (min … max)       | p75     | p99     | p995    |
| ------------ | --------------- | ------------------------ | ------- | ------- | ------- |
| Array: clear | 2.6 ms          | 381.8 (1.6 ms … 5.8 ms)  | 2.6 ms  | 5.6 ms  | 5.6 ms  |
| Set: clear   | 34.7 ms         | 28.8 (32.8 ms … 40.2 ms) | 34.9 ms | 40.2 ms | 40.2 ms |

**Summary**: Array: clear is **13.27x faster** than Set: clear.

### Group: Size

| Method            | Time/Iter (avg) | Iter/s (min … max)             | p75    | p99     | p995    |
| ----------------- | --------------- | ------------------------------ | ------ | ------- | ------- |
| Array: size check | 5.8 ns          | 173,500,000 (5.1 ns … 42.2 ns) | 5.3 ns | 14.9 ns | 17.3 ns |
| Set: size check   | 6.7 ns          | 148,400,000 (5.9 ns … 93.5 ns) | 6.4 ns | 12.4 ns | 15.0 ns |

**Summary**: Array: size check is **1.17x faster** than Set: size check.

### Group: Filter

| Method        | Time/Iter (avg) | Iter/s (min … max)       | p75     | p99     | p995    |
| ------------- | --------------- | ------------------------ | ------- | ------- | ------- |
| Array: filter | 15.6 ms         | 64.0 (13.6 ms … 18.8 ms) | 17.0 ms | 18.8 ms | 18.8 ms |
| Set: filter   | 22.2 ms         | 45.1 (19.7 ms … 34.6 ms) | 23.0 ms | 34.6 ms | 34.6 ms |

**Summary**: Array: filter is **1.42x faster** than Set: filter.

### Group: Merge

| Method       | Time/Iter (avg) | Iter/s (min … max)       | p75     | p99     | p995    |
| ------------ | --------------- | ------------------------ | ------- | ------- | ------- |
| Array: merge | 3.8 ms          | 260.8 (2.9 ms … 6.0 ms)  | 3.9 ms  | 5.1 ms  | 6.0 ms  |
| Set: merge   | 35.6 ms         | 28.1 (33.4 ms … 40.4 ms) | 36.4 ms | 40.4 ms | 40.4 ms |

**Summary**: Array: merge is **9.28x faster** than Set: merge.

---

## Methodology

We used the Deno benchmarking tool to measure performance. Each test involves creating a test dataset of size 1,000,000 and performing the specified operation repeatedly. Results are grouped and compared for clarity.

## How to Run Benchmarks

1. Install [Deno](https://deno.land/).
2. Clone this repository.
3. Run the benchmark script:
   ```bash
   deno bench
   ```

## Contributions

Feel free to contribute by adding new methods or optimizing existing benchmarks. Open an issue or submit a pull request.

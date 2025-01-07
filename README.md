# Benchmarking Performance: Array vs. Set in Deno

This project benchmarks the performance of `Array` and `Set` operations in Deno using `Deno.bench`. It evaluates common operations such as searching, adding, and deleting elements to understand their relative performance characteristics.

## Benchmark Results

### Group: `includes` (Search Operation)

| Operation       | Time/Iteration (avg) | Iterations/Sec (min … max)     | p75      | p99     | p995    |
| --------------- | -------------------- | ------------------------------ | -------- | ------- | ------- |
| Array: includes | 615.4 µs             | 1,625 (478.1 µs … 3.0 ms)      | 632.0 µs | 1.3 ms  | 2.2 ms  |
| Set: has        | 6.5 ns               | 154,200,000 (4.8 ns … 56.6 ns) | 8.2 ns   | 15.1 ns | 19.7 ns |

**Summary**: `Array: includes` is **94,890x slower** than `Set: has`.

### Group: `add` (Add Element)

| Operation          | Time/Iteration (avg) | Iterations/Sec (min … max) | p75     | p99     | p995    |
| ------------------ | -------------------- | -------------------------- | ------- | ------- | ------- |
| Array: add element | 10.2 ms              | 98.4 (7.5 ms … 37.8 ms)    | 9.8 ms  | 37.8 ms | 37.8 ms |
| Set: add element   | 35.0 ms              | 28.6 (33.1 ms … 40.2 ms)   | 34.9 ms | 40.2 ms | 40.2 ms |

**Summary**: `Array: add element` is **3.44x faster** than `Set: add element`.

### Group: `delete` (Delete Element)

| Operation             | Time/Iteration (avg) | Iterations/Sec (min … max) | p75     | p99     | p995    |
| --------------------- | -------------------- | -------------------------- | ------- | ------- | ------- |
| Array: delete element | 3.5 ms               | 282.3 (3.1 ms … 6.9 ms)    | 3.6 ms  | 5.7 ms  | 6.9 ms  |
| Set: delete element   | 43.7 ms              | 22.9 (39.2 ms … 51.7 ms)   | 46.4 ms | 51.7 ms | 51.7 ms |

**Summary**: `Array: delete element` is **12.34x faster** than `Set: delete element`.

---

## Key Takeaways

1. **Search (`includes` vs. `has`)**:

   - `Set: has` is vastly faster than `Array: includes` due to the constant-time complexity of `Set` operations versus the linear-time complexity of `Array` searches.

2. **Add Element**:

   - Adding elements is faster in `Array` than `Set` in this benchmark, likely due to the overhead associated with maintaining a `Set`'s unique constraint.

3. **Delete Element**:
   - Deleting elements is significantly faster in `Array` compared to `Set`. This might be due to the overhead in recalculating internal data structures for `Set`.

## Running the Benchmarks

To run these benchmarks, ensure you have Deno installed and execute the following command:

```bash
deno bench
```

## About This Project

This project was created to highlight the performance trade-offs between `Array` and `Set` for various operations. Use this data to make informed decisions when choosing the appropriate data structure for your use case.

## License

This project is licensed under the MIT License.

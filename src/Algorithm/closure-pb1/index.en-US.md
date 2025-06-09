---
toc: content
order: 3
group:
  title: closure
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Counter

Today we encounter the most classic problem of closures: **Counter**.

## Problem Description

Given an integer parameter `n`, please write and return a `counter` function. This `counter` function initially returns `n`, and each time it is called, it returns the previous value plus `1` (`n, n + 1, n + 2`, and so on).

**Example 1:**

```ts
**Input:**
n = 10
["call","call","call"]
**Output:** [10,11,12]
**Explanation:**
counter( ) = 10 // The first call to counter(), returns n.
counter( ) = 11 // Returns the value of the previous call plus 1.
counter( ) = 12 // Returns the value of the previous call plus 1.
```

**Example 2:**

```ts
**Input:**
n = -2
["call","call","call","call","call"]

**Output:** [-2,-1,0,1,2]
**Explanation:** counter() initially returns -2. Then it increases by 1 after each subsequent call.
```

**Note:**

```ts
-1000 <= n <= 1000;
0 <= calls.length <= 1000;
calls[i] === 'call';
```

## Approach

**Own Implementation**

```ts
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let sum = null;
  return function () {
    if (sum == null) {
      sum = n;
    } else {
      sum++;
    }
    return sum;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

**Method 1: Increment First, Then Return**  
We declare a variable `currentCount` and set it to `n - 1` first. Then in the `counter` function, we increase `currentCount` and return its value. Please note that since we modify `currentCount`, we should declare it using `let` instead of `const`.

```ts
var createCounter = function (n: number) {
  let currentCount = n - 1;
  return function () {
    currentCount += 1;
    return currentCount;
  };
};
```

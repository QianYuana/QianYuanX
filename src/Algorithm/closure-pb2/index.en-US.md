---
toc: content
order: 4
group:
  title: closure
nav:
  title: Algorithm
  path: /algorithm
  order: 3
---

# Composite Function

Today, we'll come to the most classic topic of closures: **Composite Function**.

## Problem Description

Please write a function that receives an array of functions `[f1, f2, f3, …, fn]` and returns a new function `fn`, which is the composite function of the function array.

The composite function of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

The composite function of an empty function list is the identity function `f(x) = x`.

You can assume that each function in the array takes an integer parameter as input and returns an integer as output.

**Example 1:**

```ts
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Calculating from right to left...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
```

**Example 2:**

```ts
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Calculating from right to left...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
```

**Example 3:**

```ts
Input: functions = [], x = 42
Output: 42
Explanation:
The composite function of an empty function list is the identity function.
```

**Hints:**

```ts
-1000 <= x <= 1000
0 <= functions.length <= 1000
All functions accept and return an integer.
```

## Solution Explanation

The goal of the problem is to create a `compose` function that returns a function `fn`. When we call `fn(4)`, it should execute the given array of functions.

We can store the function array in an outer function or a variable `sum` in the inner function. If the function array is empty, we can simply return the given argument `x`.

Otherwise, we can execute the functions from right to left by reversing the array. This is similar to the `compose` function in `ramda`.

We can also reverse the function array so that the execution is from left to right, which makes it easier to implement. Here's how the solution could look:

```ts
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let arr = functions;
  let sum = 0;
  return function (x) {
    if (arr.length == 0) {
      return x;
    } else {
      sum = x;
      arr.reverse().forEach((item, index) => {
        sum = item(sum);
      });
    }
    return sum;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
```
